/* Static validator for the story graph. Run: node tools/validate.js */
"use strict";
global.window = {};
require("../js/story-part1.js");
require("../js/story-part2.js");
const STORY = Object.assign({}, window.STORY_PART1, window.STORY_PART2);
const ENDINGS = window.STORY_ENDINGS;
let errors = [];
let warnings = [];

// keys used in "if" gates the engine must support
const GATE_KEYS = new Set(["item", "noItem", "flag", "notFlag", "trait", "any"]);
const EFFECT_KEYS = new Set(["items", "flags", "traits"]);

for (const [id, node] of Object.entries(STORY)) {
  (node.choices || []).forEach((c, i) => {
    if (!c.text) errors.push(`${id}: choice ${i} has no text`);
    if (!STORY[c.to]) errors.push(`${id}: choice ${i} targets missing node "${c.to}"`);
    if (c.if) for (const k of Object.keys(c.if)) if (!GATE_KEYS.has(k)) errors.push(`${id}: choice ${i} uses unknown gate "${k}"`);
    if (c.effects) for (const k of Object.keys(c.effects)) if (!EFFECT_KEYS.has(k)) errors.push(`${id}: choice ${i} uses unknown effect "${k}"`);
  });
  (node.text || []).forEach((p, i) => {
    if (typeof p !== "string" && p.if) for (const k of Object.keys(p.if)) if (!GATE_KEYS.has(k)) errors.push(`${id}: paragraph ${i} uses unknown gate "${k}"`);
  });
  if (node.ending && !ENDINGS[node.ending.key]) errors.push(`${id}: unknown ending key ${node.ending.key}`);
}

// reachability: every node reachable from "start" under a permissive walk (take all choices)
const reachable = new Set();
function walk(id) {
  if (reachable.has(id) || !STORY[id]) return;
  reachable.add(id);
  (STORY[id].choices || []).forEach(c => walk(c.to));
}
walk("start");
for (const id of Object.keys(STORY)) if (!reachable.has(id)) errors.push(`node "${id}" is unreachable from start`);

// all four endings reachable
const foundEndings = new Set();
function walk2(id, seen) {
  const node = STORY[id];
  if (!node || seen.has(id)) return;
  seen.add(id);
  if (node.ending) { foundEndings.add(node.ending.key); return; }
  (node.choices || []).forEach(c => walk2(c.to, seen));
  seen.delete(id);
}
walk2("start", new Set());
for (const k of Object.keys(ENDINGS)) if (!foundEndings.has(k)) errors.push(`ending "${k}" is not reachable`);

// word counts: shortest path via DP relaxation (no positive cycles reachable in
// practice for min), longest *simple* path via budgeted randomized DFS (exact
// enumeration is exponential and hung on the story's loops)
const edges = {};
for (const [id, node] of Object.entries(STORY)) edges[id] = (node.choices || []).map(c => c.to);
function nodeWords(node) {
  let n = 0;
  (node.text || []).forEach(p => { n += (typeof p === "string" ? p : p.text).split(/\s+/).length; });
  (node.choices || []).forEach(c => { n += c.text.split(/\s+/).length; });
  return n;
}
const WPM = 120; // B1 teen reading speed
let minWords = Infinity, maxWords = 0;
const minDist = { start: 0 };
for (let iter = 0; iter < Object.keys(STORY).length + 2; iter++) {
  let changed = false;
  for (const [id, node] of Object.entries(STORY)) {
    if (node.ending || minDist[id] === undefined) continue;
    const w = nodeWords(node);
    for (const t of edges[id]) {
      if (minDist[t] === undefined || minDist[id] + w < minDist[t]) { minDist[t] = minDist[id] + w; changed = true; }
    }
  }
  if (!changed) break;
}
for (const [id, node] of Object.entries(STORY)) {
  if (node.ending && minDist[id] !== undefined) minWords = Math.min(minWords, minDist[id]);
}
// budgeted randomized DFS for the longest simple path
let best = { words: 0, path: [] };
let budget = 400000;
function rnd(n) { return Math.floor(Math.random() * n); }
function dfsMax(id, words, path, seen) {
  if (budget-- <= 0) return;
  const node = STORY[id];
  if (!node || seen.has(id)) return;
  seen.add(id); path.push(id);
  const w = words + nodeWords(node);
  if (node.ending) {
    if (w > best.words) best = { words: w, path: path.slice() };
  } else {
    const opts = node.choices.map(c => c.to);
    for (let i = opts.length - 1; i > 0; i--) { const j = rnd(i + 1); [opts[i], opts[j]] = [opts[j], opts[i]]; }
    for (const t of opts) dfsMax(t, w, path, seen);
  }
  seen.delete(id); path.pop();
}
for (let run = 0; run < 300 && budget > 0; run++) dfsMax("start", 0, [], new Set());
maxWords = best.words;
if (minWords / WPM < 30) warnings.push(`shortest path is only ${minWords} words (~${(minWords / WPM).toFixed(1)} min at ${WPM} wpm) — below the 30 min target`);

console.log(`nodes: ${Object.keys(STORY).length}, reachable: ${reachable.size}, endings reachable: ${[...foundEndings].sort().join(", ")}`);
console.log(`longest path found: ${maxWords} words (~${(maxWords / WPM).toFixed(1)} min) via ${best.path.join(" -> ")}`);
console.log(`shortest path: ${minWords} words (~${(minWords / WPM).toFixed(1)} min)`);
warnings.forEach(w => console.log("WARN: " + w));
if (errors.length) { errors.forEach(e => console.log("ERROR: " + e)); process.exit(1); }
console.log("OK: graph valid, all 4 endings reachable");
