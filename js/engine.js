/* Story engine: rendering, state, gated choices, saves, endings. No dependencies. */
(function () {
  "use strict";

  const STORY = Object.assign({}, window.STORY_PART1, window.STORY_PART2);
  const ENDINGS = window.STORY_ENDINGS || {};

  const SAVE_KEY = "vale.save";
  const ENDINGS_KEY = "vale.endings";
  const SETTINGS_KEY = "vale.settings";

  const stage = document.getElementById("stage");
  const topbar = document.getElementById("topbar");
  const chapterLabel = document.getElementById("chapter-label");
  const progressFill = document.getElementById("progressfill");
  const toastEl = document.createElement("div");
  toastEl.id = "toast";
  document.body.appendChild(toastEl);

  let settings = { size: 0, motion: "on" };
  try { settings = Object.assign(settings, JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}")); } catch (e) {}
  applySettings();

  let state = null;
  let toastTimer = null;

  /* ── helpers ── */
  function save() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); } catch (e) {} }
  function loadSave() { try { return JSON.parse(localStorage.getItem(SAVE_KEY) || "null"); } catch (e) { return null; } }
  function clearSave() { try { localStorage.removeItem(SAVE_KEY); } catch (e) {} }
  function loadFoundEndings() { try { return JSON.parse(localStorage.getItem(ENDINGS_KEY) || "[]"); } catch (e) { return []; } }
  function recordEnding(id) {
    const found = loadFoundEndings();
    if (!found.includes(id)) { found.push(id); try { localStorage.setItem(ENDINGS_KEY, JSON.stringify(found)); } catch (e) {} }
  }

  function applySettings() {
    document.documentElement.dataset.size = settings.size;
    document.body.dataset.motion = settings.motion;
    if (window.Starfield) window.Starfield.setReduceMotion(settings.motion === "off" || matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  function has(item) { return state.items.includes(item); }
  function flag(f) { return !!state.flags[f]; }
  function trait(name) { return state.traits[name] || 0; }

  function condOk(c) {
    if (!c) return true;
    if (c.item && !has(c.item)) return false;
    if (c.noItem && has(c.noItem)) return false;
    if (c.flag && !flag(c.flag)) return false;
    if (c.notFlag && flag(c.notFlag)) return false;
    if (c.trait) { for (const k in c.trait) if (trait(k) < c.trait[k]) return false; }
    if (c.any && !c.any.some(f => flag(f))) return false;
    return true;
  }

  function paraOk(p) { return typeof p === "string" || condOk(p.if); }
  function paraText(p) { return typeof p === "string" ? p : p.text; }

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function renderParagraph(p) {
    if (p === "***") return '<div class="break" aria-hidden="true">✦</div>';
    let t = escapeHtml(paraText(p));
    // inline markup: *emphasis* and _note lines_
    t = t.replace(/\*(.+?)\*/g, "<em>$1</em>");
    if (typeof p !== "string" && p.style === "note") return `<p class="note">${t}</p>`;
    if (typeof p !== "string" && p.style === "voice") return `<p class="voice">${t}</p>`;
    return `<p>${t}</p>`;
  }

  /* ── mood presets ── */
  const MOODS = {
    dusk:   { density: 1, hue: 224, aur1: "rgba(72,96,220,0.20)", aur2: "rgba(150,84,200,0.14)", aur3: "rgba(28,48,110,0.26)" },
    night:  { density: 0.92, hue: 218, aur1: "rgba(60,86,210,0.16)", aur2: "rgba(120,84,210,0.12)", aur3: "rgba(22,40,100,0.24)" },
    unease: { density: 0.7, hue: 232, aur1: "rgba(70,70,190,0.18)", aur2: "rgba(96,60,180,0.16)", aur3: "rgba(40,28,90,0.30)" },
    storm:  { density: 0.45, hue: 238, aur1: "rgba(60,60,160,0.16)", aur2: "rgba(70,44,140,0.14)", aur3: "rgba(30,20,70,0.34)" },
    dread:  { density: 0.22, hue: 244, aur1: "rgba(50,50,120,0.12)", aur2: "rgba(50,36,110,0.12)", aur3: "rgba(20,14,50,0.36)" },
    wonder: { density: 1.25, hue: 214, aur1: "rgba(80,120,255,0.22)", aur2: "rgba(160,110,255,0.18)", aur3: "rgba(40,70,160,0.26)" },
    dawn:   { density: 1.05, hue: 38, aur1: "rgba(255,180,90,0.18)", aur2: "rgba(255,120,110,0.12)", aur3: "rgba(90,60,140,0.22)" },
    green:  { density: 1.1, hue: 150, aur1: "rgba(70,230,180,0.16)", aur2: "rgba(60,160,220,0.14)", aur3: "rgba(24,90,80,0.28)" },
    grey:   { density: 0.3, hue: 226, aur1: "rgba(90,100,130,0.10)", aur2: "rgba(70,80,110,0.08)", aur3: "rgba(40,48,70,0.22)" },
    gold:   { density: 1.35, hue: 42, aur1: "rgba(255,200,110,0.22)", aur2: "rgba(255,150,90,0.14)", aur3: "rgba(120,80,40,0.20)" }
  };
  function setMood(name) {
    const m = MOODS[name] || MOODS.night;
    if (window.Starfield) window.Starfield.setMood({ density: m.density, hue: m.hue });
    const aur = document.getElementById("aurora");
    aur.style.setProperty("--aur1", m.aur1);
    aur.style.setProperty("--aur2", m.aur2);
    aur.style.setProperty("--aur3", m.aur3);
  }

  /* ── word stats for cover ── */
  function nodeWords(node) {
    let n = 0;
    (node.text || []).forEach(p => { n += paraText(p).split(/\s+/).length; });
    (node.choices || []).forEach(c => { n += c.text.split(/\s+/).length; });
    return n;
  }
  function graphStats() {
    let min = Infinity, max = 0;
    const seen = new Set();
    function walk(id, words) {
      const node = STORY[id];
      if (!node || seen.has(id)) return;
      seen.add(id);
      if (node.ending) {
        min = Math.min(min, words); max = Math.max(max, words); return;
      }
      (node.choices || []).forEach(c => walk(c.to, words + nodeWords(node)));
      seen.delete(id);
    }
    walk("start", 0);
    return { min: min === Infinity ? 0 : min, max };
  }

  /* ── screens ── */
  function showCover() {
    topbar.hidden = true;
    setMood("dusk");
    const { min, max } = graphStats();
    const fmt = w => Math.max(1, Math.round(w / 120));
    const found = loadFoundEndings();
    const saved = loadSave();
    const resumeHtml = saved && STORY[saved.node]
      ? `<button class="btn btn-ghost btn-small" id="btn-continue">Continue — Chapter ${saved.chapter}: ${STORY[saved.node].chapterTitle || ""}</button>`
      : "";
    stage.innerHTML = `
      <section class="cover panel" aria-label="Story cover">
        <p class="overline">An interactive story · English B1</p>
        <h1>The Night the <em>Stars Went Out</em></h1>
        <p class="lede">A summer job at Vale Observatory. A letter signed E. M. A sky that is
        losing its stars, one quiet bell at a time — and a town below that never looks up.
        Your choices decide which morning arrives.</p>
        <div class="cover-meta">
          <span class="meta-chip">≈ ${fmt(min)}–${fmt(max)} min of reading</span>
          <span class="meta-chip">4 endings</span>
          <span class="meta-chip">Your choices are remembered</span>
          <span class="meta-chip">Endings found: ${found.length} / 4</span>
        </div>
        <div class="cta-row">
          <button class="btn btn-primary" id="btn-start">Begin the night</button>
          ${resumeHtml}
          <button class="btn btn-ghost btn-small" id="btn-gallery">Endings gallery</button>
        </div>
        <p class="about-note">Saves and endings live only on this device — no account, no internet
        needed. Best read with the lights off.</p>
      </section>`;
    document.getElementById("btn-start").addEventListener("click", () => {
      state = { node: "start", chapter: 1, flags: {}, items: [], traits: { curious: 0, brave: 0, kind: 0, careful: 0 }, path: [] };
      save(); showNode("start");
    });
    const cont = document.getElementById("btn-continue");
    if (cont) cont.addEventListener("click", () => { state = saved; showNode(saved.node); });
    document.getElementById("btn-gallery").addEventListener("click", showGallery);
  }

  function showGallery() {
    topbar.hidden = true;
    const found = loadFoundEndings();
    const order = ["a", "b", "c", "d"];
    const cards = order.map(k => {
      const e = ENDINGS[k];
      const isFound = found.includes(k);
      return `<div class="ending-card ${isFound ? "found" : ""}">
        <span class="glyph" aria-hidden="true">${isFound ? "✦" : "?"}</span>
        <div><h3>${isFound ? e.name : "An ending not yet found"}</h3>
        <p>${isFound ? e.blurb : e.hint}</p></div></div>`;
    }).join("");
    stage.innerHTML = `
      <section class="cover panel" aria-label="Endings gallery">
        <p class="overline">Endings gallery</p>
        <h1>${found.length} of 4 <em>mornings</em></h1>
        <div class="gallery-grid">${cards}</div>
        <div class="cta-row">
          <button class="btn btn-ghost btn-small" id="btn-back">Back</button>
        </div>
      </section>`;
    document.getElementById("btn-back").addEventListener("click", showCover);
  }

  function showNode(id) {
    const node = STORY[id];
    if (!node) { stage.innerHTML = '<section class="cover panel"><h1>Missing scene</h1></section>'; return; }
    state.node = id;
    state.chapter = node.chapter || state.chapter;
    if (node.set) node.set.forEach(f => { state.flags[f] = true; });
    save();

    topbar.hidden = false;
    chapterLabel.textContent = `Chapter ${node.chapter} · ${node.chapterTitle || ""}`;
    progressFill.style.width = Math.round(((node.chapter - 1) / 10) * 100 + Math.min(8, (state.path.length % 4)) * 2.5) + "%";
    setMood(node.mood);

    if (node.ending) { renderEnding(node); return; }

    const img = node.img ? `
      <figure class="scene-img">
        <img src="${node.img}" alt="${node.imgAlt || ""}" loading="lazy" width="1600" height="686">
        <figcaption class="kicker">${node.imgKicker || ""}</figcaption>
      </figure>` : "";

    const choices = (node.choices || []).filter(c => condOk(c.if));
    const choicesHtml = `
      <div class="choices" role="group" aria-label="Choices">
        <span class="choices-label">What do you do?</span>
        ${choices.map((c, i) => `
          <button class="choice" type="button" data-to="${c.to}" data-idx="${i}">
            <span class="key" aria-hidden="true">${i + 1}</span>
            <span>${escapeHtml(c.text)}</span>
            ${c.hint ? `<span class="hint">${escapeHtml(c.hint)}</span>` : ""}
          </button>`).join("")}
      </div>`;

    stage.innerHTML = `
      <article class="scene">
        ${img}
        <div class="scene-body panel">
          <h2>${escapeHtml(node.title || "")}</h2>
          <div class="prose">${(node.text || []).filter(paraOk).map(renderParagraph).join("")}</div>
          ${choicesHtml}
        </div>
      </article>`;

    stage.querySelectorAll(".choice").forEach(btn => {
      btn.addEventListener("click", () => choose(choices[Number(btn.dataset.idx)]));
    });
    stage.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: settings.motion === "off" ? "auto" : "smooth" });
  }

  function choose(c) {
    if (c.effects) {
      (c.effects.flags || []).forEach(f => { state.flags[f] = true; });
      (c.effects.items || []).forEach(it => {
        if (!state.items.includes(it)) {
          state.items.push(it);
          toast(`Kept: ${ITEM_NAMES[it] || it}`);
        }
      });
      if (c.effects.traits) for (const k in c.effects.traits) state.traits[k] = (state.traits[k] || 0) + c.effects.traits[k];
    }
    state.path.push(c.text);
    save();
    showNode(c.to);
  }

  const ITEM_NAMES = {
    journal: "Dr. Marlow's journal",
    key: "the star-shaped key",
    musicbox: "the brass music box"
  };
  const TRAIT_NAMES = { curious: "Curious", brave: "Brave", kind: "Kind", careful: "Careful" };

  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2600);
  }

  /* ── endings ── */
  function renderEnding(node) {
    const e = node.ending;
    recordEnding(e.key);
    clearSave();
    progressFill.style.width = "100%";
    chapterLabel.textContent = "Ending";

    const traitLines = Object.keys(state.traits)
      .filter(k => state.traits[k] > 0)
      .sort((a, b) => state.traits[b] - state.traits[a]);
    const topTrait = traitLines.length ? TRAIT_NAMES[traitLines[0]] : "Curious";

    const recapItems = [
      `You kept: ${state.items.length ? state.items.map(i => ITEM_NAMES[i] || i).join(", ") : "nothing but your questions"}`,
      ...state.path.slice(-6).map(p => `<span class="trait">${escapeHtml(p)}</span>`),
      `The stars will remember you as *${topTrait}*.`
    ];

    stage.innerHTML = `
      <article class="scene">
        <div class="scene-body panel ending">
          <p class="ending-no">Ending ${e.key.toUpperCase()} of D</p>
          <h1>${escapeHtml(e.name)}</h1>
          <div class="prose">${(node.text || []).filter(paraOk).map(renderParagraph).join("")}</div>
          <div class="recap">
            <h3>The night you made</h3>
            <ul>${recapItems.map(r => `<li>${r.startsWith("<span") ? r : renderParagraph(r)}</li>`).join("")}</ul>
          </div>
          <div class="cta-row">
            <button class="btn btn-primary" id="btn-again">Read another night</button>
            <button class="btn btn-ghost btn-small" id="btn-gallery2">Endings gallery</button>
          </div>
        </div>
      </article>`;
    document.getElementById("btn-again").addEventListener("click", () => {
      state = { node: "start", chapter: 1, flags: {}, items: [], traits: { curious: 0, brave: 0, kind: 0, careful: 0 }, path: [] };
      save(); showNode("start");
    });
    document.getElementById("btn-gallery2").addEventListener("click", showGallery);
  }

  /* ── keyboard ── */
  document.addEventListener("keydown", ev => {
    if (ev.key >= "1" && ev.key <= "5") {
      const btns = stage.querySelectorAll(".choice");
      const b = btns[Number(ev.key) - 1];
      if (b && !ev.metaKey && !ev.ctrlKey) { ev.preventDefault(); b.click(); }
    }
  });

  document.getElementById("btn-textsize").addEventListener("click", () => {
    settings.size = (settings.size + 1) % 3;
    applySettings();
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); } catch (e) {}
  });
  const motionBtn = document.getElementById("btn-motion");
  motionBtn.setAttribute("aria-pressed", String(settings.motion === "off"));
  motionBtn.addEventListener("click", () => {
    settings.motion = settings.motion === "off" ? "on" : "off";
    motionBtn.setAttribute("aria-pressed", String(settings.motion === "off"));
    applySettings();
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); } catch (e) {}
  });

  /* ── boot ── */
  showCover();
})();
