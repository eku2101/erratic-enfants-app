import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
const read=name=>readFile(new URL(`../dist/${name}`,import.meta.url),'utf8');
test('canvas contains the exact mandatory size, ratio, and clipping declarations',async()=>{
  const css=await read('styles.css');
  const canvas=css.match(/\.app-canvas\s*\{([^}]+)\}/)[1].replace(/\s+/g,'');
  for(const rule of ['width:min(1080px,calc(100vw-2rem),calc((100dvh-2rem)*4/5));','max-width:1080px;','max-height:1350px;','aspect-ratio:4/5;','box-sizing:border-box;','flex:none;','overflow:hidden!important;'])assert.ok(canvas.includes(rule),rule);
  assert.equal((css.match(/\.app-canvas\s*\{/g)||[]).length,1,'no later canvas override');
});
test('semantic single-main app has all three wireframe sections, progress and footer',async()=>{
  const html=await read('index.html');assert.equal((html.match(/<main\b/g)||[]).length,1);
  for(const [n,stage] of ['reflect','release','recharge'].entries())assert.ok(html.includes(`id="step-${n+1}" data-step="${stage}"`));
  assert.ok(html.includes('<progress'));assert.ok(html.includes('max="120"'));
  assert.ok(html.includes('<header'));assert.ok(html.includes('<footer'));
  assert.ok(!/<(?:iframe|video|nav)\b/i.test(html));assert.ok(!/user-scalable=no|maximum-scale=1/.test(html));
});
test('compiled app only links to the two approved movie sources and has no remote assets or tracking',async()=>{
  const files=await readdir(new URL('../dist/',import.meta.url));
  const approved=new Set(['https://www.rottentomatoes.com/m/school_of_rock/videos/ScT_OYLuqaPK','https://www.rottentomatoes.com/m/freedom_writers/videos/FCnSJ1fiwyJF']);
  for(const file of files.filter(f=>/\.(html|css|mjs)$/.test(f))){
    const text=await read(file);
    for(const url of text.match(/https?:\/\/[^\s"'<>]+/g)||[])assert.ok(file==='index.html'&&approved.has(url),file);
    assert.ok(!/\bsrc=["']https?:\/\//.test(text),file);
    assert.ok(!/localStorage|sessionStorage|indexedDB|sendBeacon/.test(text),file);
  }
});
test('palette and reduced motion survive adaptation',async()=>{
  const css=await read('styles.css');
  for(const hex of ['#12181b','#1e262b','#283238','#8ab49c','#6db3b1','#a3a7db','#e0e6ed','#94a3b8'])assert.ok(css.includes(hex));
  assert.ok(css.includes('prefers-reduced-motion'));assert.ok(css.includes('focus-visible'));
});
test('reference AGENTS is byte-identical to the root instructions',async()=>{
  const root=await readFile(new URL('../AGENTS.md',import.meta.url));
  const ref=await readFile(new URL('../references/robert/AGENTS.md',import.meta.url));assert.deepEqual(root,ref);
});
