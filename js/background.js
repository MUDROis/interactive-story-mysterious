/* Canvas starfield: twinkling stars, shooting stars, drifting dust.
   The engine drives density and colour via Starfield.mood(). */
(function () {
  "use strict";
  const canvas = document.getElementById("sky");
  const ctx = canvas.getContext("2d");
  let W = 0, H = 0, DPR = 1;
  let stars = [];
  let dust = [];
  let meteor = null;
  let reduceMotion = false;

  const mood = { density: 1, hue: 220, saturation: 20, aurora: 1 };

  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.width = Math.floor(innerWidth * DPR);
    H = canvas.height = Math.floor(innerHeight * DPR);
    canvas.style.width = innerWidth + "px";
    canvas.style.height = innerHeight + "px";
    seed();
  }

  function rnd(a, b) { return a + Math.random() * (b - a); }

  function seed() {
    const target = Math.floor((W * H) / (9000 * DPR)) + 40;
    const n = Math.max(60, Math.floor(target * mood.density));
    stars = [];
    for (let i = 0; i < n; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H * 0.96,
        r: rnd(0.5, 1.7) * DPR,
        base: rnd(0.25, 0.85),
        tw: rnd(0.4, 1.6),
        ph: Math.random() * Math.PI * 2,
        warm: Math.random() < 0.22
      });
    }
    dust = [];
    for (let i = 0; i < 26; i++) {
      dust.push({ x: Math.random() * W, y: Math.random() * H, r: rnd(18, 70) * DPR, a: rnd(0.015, 0.05), vx: rnd(-4, 4) * DPR, vy: rnd(-6, -1) * DPR });
    }
  }

  let t = 0;
  function frame() {
    t += 0.016;
    // deep background
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, "#04060f");
    g.addColorStop(0.55, "#070b18");
    g.addColorStop(1, "#0a0f22");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    // nebula dust
    for (const d of dust) {
      if (!reduceMotion) {
        d.x += d.vx; d.y += d.vy;
        if (d.y < -d.r) { d.y = H + d.r; d.x = Math.random() * W; }
        if (d.x < -d.r) d.x = W + d.r;
        if (d.x > W + d.r) d.x = -d.r;
      }
      const rg = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r);
      rg.addColorStop(0, `hsla(${mood.hue}, 60%, 65%, ${d.a * mood.aurora})`);
      rg.addColorStop(1, "transparent");
      ctx.fillStyle = rg;
      ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2); ctx.fill();
    }

    // stars
    for (const s of stars) {
      const tw = reduceMotion ? 1 : (0.72 + 0.28 * Math.sin(t * s.tw + s.ph));
      const alpha = s.base * tw;
      const light = s.warm ? 68 : 88;
      ctx.fillStyle = `hsla(${mood.hue}, ${mood.saturation}%, ${light}%, ${alpha})`;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
      if (s.r > 1.4 * DPR) {
        ctx.fillStyle = `hsla(${mood.hue}, ${mood.saturation}%, ${light}%, ${alpha * 0.14})`;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r * 3.4, 0, Math.PI * 2); ctx.fill();
      }
    }

    // shooting star
    if (!reduceMotion) {
      if (!meteor && Math.random() < 0.0035) {
        meteor = { x: rnd(W * 0.2, W), y: rnd(0, H * 0.35), vx: -rnd(9, 14) * DPR, vy: rnd(3, 6) * DPR, life: 1 };
      }
      if (meteor) {
        meteor.x += meteor.vx; meteor.y += meteor.vy; meteor.life -= 0.022;
        const mg = ctx.createLinearGradient(meteor.x, meteor.y, meteor.x - meteor.vx * 8, meteor.y - meteor.vy * 8);
        mg.addColorStop(0, `hsla(45, 80%, 80%, ${meteor.life})`);
        mg.addColorStop(1, "transparent");
        ctx.strokeStyle = mg; ctx.lineWidth = 1.6 * DPR;
        ctx.beginPath(); ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(meteor.x - meteor.vx * 8, meteor.y - meteor.vy * 8); ctx.stroke();
        if (meteor.life <= 0 || meteor.x < -80) meteor = null;
      }
    }

    requestAnimationFrame(frame);
  }

  addEventListener("resize", resize, { passive: true });
  addEventListener("DOMContentLoaded", () => {
    reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    resize();
    frame();
  });

  window.Starfield = {
    setMood(next) {
      Object.assign(mood, next);
      if (next.density !== undefined) seed();
    },
    setReduceMotion(v) { reduceMotion = v; }
  };
})();
