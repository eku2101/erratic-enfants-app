import {Session, stages, breathAt, formatTime, shouldReturnToBay} from './session.mjs';
import {groups, supportFor, grounding} from './content.mjs';
const $=id=>document.getElementById(id);
const app=$('app');
const panels={landing:$('app-landing'),reflect:$('step-1'),release:$('step-2'),recharge:$('step-3')};
let session=null, category=null, choice=null, word='', groundingMode=false, mode='landing', lastCue=-1, roomPaused=false, roomVisible=false;
let motion=!matchMedia('(prefers-reduced-motion: reduce)').matches;
const waveAudio=$('wave-audio');
waveAudio.volume=.16;
const say=text=>{$('announcer').textContent=text;};
function stopSound() { waveAudio.pause(); $('sound-toggle').setAttribute('aria-pressed','false'); $('sound-toggle').setAttribute('aria-label','Turn on wave sounds'); $('sound-toggle').title='Turn on wave sounds'; }
function setMotion() { app.dataset.motion=motion?'on':'off'; $('motion-toggle').setAttribute('aria-pressed',String(motion)); $('motion-toggle').setAttribute('aria-label',motion?'Turn off motion':'Turn on motion'); $('motion-toggle').title=motion?'Turn off motion':'Turn on motion'; }
setMotion();
$('motion-toggle').addEventListener('click',()=>{motion=!motion;setMotion();});
matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',event=>{motion=!event.matches;setMotion();});
$('sound-toggle').addEventListener('click',async()=>{
  if(!waveAudio.paused){stopSound();return;}
  try { await waveAudio.play(); if(mode!=='landing'){stopSound();return;} $('sound-toggle').setAttribute('aria-pressed','true'); $('sound-toggle').setAttribute('aria-label','Turn off wave sounds'); $('sound-toggle').title='Turn off wave sounds'; }
  catch { say('Wave sounds are unavailable. You can still begin your reset.'); }
});
function updateControls() {
  const paused=!!session&&!session.running&&mode!=='done';
  app.dataset.paused=String(paused);
  $('pause-session').setAttribute('aria-label',paused?'Resume reset':'Pause reset');
  $('pause-session').title=paused?'Resume reset':'Pause reset';
  $('pause-session').textContent=paused?'Resume':'Pause';
  $('timer-label').textContent=paused?'paused':mode==='done'?'complete':'this step';
}
function show(next,focus=true) {
  mode=next;app.dataset.mode=next;
  const panelName=next==='done'?'recharge':next;
  for(const [key,panel] of Object.entries(panels))panel.hidden=key!==panelName;
  $('app-header').hidden=next==='landing';
  $('landing-controls').hidden=next!=='landing';
  $('session-controls').hidden=next==='landing'||next==='done';
  $('finish-session').hidden=next!=='done';
  if(next==='release'||next==='recharge'||next==='done'){
    document.activeElement?.blur();
    const support=supportFor(category,choice,word);
    $('teacher-joke').textContent=support.joke;
    $('reassurance').textContent=support.reminder;
    $('next-action').textContent=support.action;
    lastCue=-1;
  }
  if(next==='release')say('Release. Ninety seconds. Follow the breath at a comfortable pace, or choose grounding.');
  if(next==='recharge')say('Recharge. Twenty seconds. Take one small next step with you.');
  if(next==='done')say('Your two-minute reset is complete. Return when you are ready.');
  updateControls();
  if(focus)panels[panelName].querySelector('h1,h2')?.focus({preventScroll:true});
}
function returnToBay(message='Stay aware of your classroom.') {
  stopSound();session=null;category=null;choice=null;word='';groundingMode=false;lastCue=-1;
  $('feeling-word').value='';$('feeling-panel').hidden=false;$('detail-panel').hidden=true;
  $('landing-note').textContent=message;show('landing',false);$('btn-begin').focus({preventScroll:true});say(message);
}
$('btn-begin').addEventListener('click',()=>{
  stopSound();category=null;choice=null;word='';groundingMode=false;lastCue=-1;
  $('feeling-word').value='';$('feeling-panel').hidden=false;$('detail-panel').hidden=true;
  $('breath-figure').hidden=false;$('grounding-visual').hidden=true;$('practice-toggle').textContent='Prefer grounding?';
  $('release-title').textContent='One breath at a time.';
  session=new Session();session.resume(performance.now());show('reflect');say('Reflect. Choose a feeling. You can pause the timer if you need more time.');renderClock();
});
document.querySelectorAll('[data-category]').forEach(button=>button.addEventListener('click',()=>{
  if(mode!=='reflect')return;
  category=button.dataset.category;choice=null;word='';$('feeling-word').value='';
  const group=groups[category];$('feeling-panel').hidden=true;$('detail-panel').hidden=false;
  $('detail-title').textContent=group.title;$('detail-choices').hidden=category==='alone';$('alone-input').hidden=category!=='alone';
  $('choice-list').replaceChildren();
  for(const [value,label] of group.options){
    const row=document.createElement('label');row.className='radio-option';
    const radio=document.createElement('input');radio.type='radio';radio.name=category==='overworked'?'stress-source':'respect';radio.value=value;
    radio.addEventListener('change',()=>{choice=value;say(`${label} selected. ${session?.running?'Release begins when this timer ends.':'Tap Resume when you are ready.'}`);});
    row.append(radio,document.createTextNode(label));$('choice-list').append(row);
  }
  $('detail-title').focus({preventScroll:true});
}));
$('change-feeling').addEventListener('click',()=>{category=null;choice=null;word='';$('feeling-panel').hidden=false;$('detail-panel').hidden=true;$('reflect-title').focus({preventScroll:true});});
$('feeling-word').addEventListener('input',event=>{word=event.target.value.slice(0,40);});
// Pausing text entry prevents a timer transition while the keyboard is in use.
$('feeling-word').addEventListener('focus',()=>{if(session?.running){session.pause(performance.now());updateControls();say('Timer paused while you write. Choose Resume when ready.');}});
$('pause-session').addEventListener('click',()=>{
  if(!session||mode==='done')return;
  if(session.running)session.pause(performance.now());else session.resume(performance.now());
  updateControls();say(session.running?'Reset resumed.':'Reset paused.');
});
$('exit-session').addEventListener('click',()=>returnToBay('A pause is here whenever you need it.'));
$('finish-session').addEventListener('click',()=>returnToBay('One small next step is enough.'));
// Keep the user's place when an optional Recharge clip opens in another tab.
function pauseForMovie() {
  if(session?.running){session.pause(performance.now());updateControls();renderClock();say('Reset paused. Your movie opens in a new tab. Tap Resume when you return.');}
}
document.querySelectorAll('.movie-link').forEach(link=>{
  link.addEventListener('click',pauseForMovie);
  link.addEventListener('auxclick',event=>{if(event.button===1)pauseForMovie();});
});
$('practice-toggle').addEventListener('click',()=>{
  groundingMode=!groundingMode;lastCue=-1;
  $('breath-figure').hidden=groundingMode;$('grounding-visual').hidden=!groundingMode;
  $('release-title').textContent=groundingMode?'Come back to the room.':'One breath at a time.';
  $('practice-toggle').textContent=groundingMode?'Return to breathing':'Prefer grounding?';
  say(groundingMode?'Grounding. Keep your eyes open and breathe naturally.':'Breathing. Four seconds in, six seconds out. Follow your own comfortable pace.');renderClock();
});
function renderClock() {
  if(!session)return;
  $('timer-display').textContent=formatTime(session.remaining);
  $('reset-progress').value=session.elapsed;
  $('reset-progress').setAttribute('aria-valuetext',`${Math.floor(session.elapsed)} of 120 seconds complete; ${mode==='done'?'complete':mode}`);
  if(mode==='release'){
    const elapsed=session.elapsed-stages.release[0];
    const beat=breathAt(elapsed);
    if($('breath-prompt').textContent!==beat.label)$('breath-prompt').textContent=beat.label;
    $('breath-count').textContent=beat.count;
    $('breathing-guide').style.transform=`scale(${beat.scale})`;
    const cueIndex=Math.min(2,Math.floor(elapsed/30));
    if(cueIndex!==lastCue){lastCue=cueIndex;$('tailored-cue').textContent=groundingMode?grounding[cueIndex]:supportFor(category,choice,word).cue[cueIndex];}
  }
}
setInterval(()=>{
  if(!session)return;
  session.tick(performance.now());
  if(shouldReturnToBay(session,category)){returnToBay('No rush. Begin when you have a moment.');return;}
  if(session.phase!==mode)show(session.phase);
  renderClock();
},100);
document.addEventListener('visibilitychange',()=>{
  if(document.hidden){stopSound();if(session?.running){session.pause(performance.now());updateControls();say('Reset paused while you were away.');}}
});
function checkRoom(){
  const rect=app.getBoundingClientRect();const tooSmall=rect.width<280||rect.height<350;
  $('room-message').hidden=!tooSmall;
  for(const element of [$('app-header'),app.querySelector('.app-body'),app.querySelector('.app-footer')])element.inert=tooSmall;
  if(tooSmall&&session?.running){session.pause(performance.now());roomPaused=true;updateControls();}
  if(tooSmall&&!roomVisible){$('room-title').focus({preventScroll:true});say('Turn your phone upright or enlarge this window to continue.');}
  if(!tooSmall&&roomPaused){roomPaused=false;say('There is room to continue. Choose Resume when ready.');}
  roomVisible=tooSmall;
}
new ResizeObserver(checkRoom).observe(app);
checkRoom();
