import {readFile,writeFile} from 'node:fs/promises';
const read=name=>readFile(new URL(`./dist/${name}`,import.meta.url),'utf8');
let html=await read('index.html');
const css=await read('styles.css');
const modules=await Promise.all(['session.mjs','content.mjs','app.mjs'].map(read));
const js=modules.map(text=>text.replace(/^import .+;\r?\n/gm,'').replace(/^export /gm,'')).join('\n');
const wave=await readFile(new URL('./dist/assets/harbor.wav',import.meta.url));
const icon=await readFile(new URL('./dist/assets/icon.svg',import.meta.url));
html=html.replace('<link rel="stylesheet" href="./styles.css">',`<style>\n${css}\n</style>`)
  .replace('<script type="module" src="./app.mjs"></script>',`<script type="module">\n${js}\n</script>`)
  .replace('href="./assets/icon.svg"',`href="data:image/svg+xml;base64,${icon.toString('base64')}"`)
  .replace('src="./assets/harbor.wav"',`src="data:audio/wav;base64,${wave.toString('base64')}"`);
await writeFile(new URL('./Erratic-Enfants-App-Preview.html',import.meta.url),html);
console.log('Saved self-contained Erratic-Enfants-App-Preview.html');
