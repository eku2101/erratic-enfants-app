// Wireframe timing: Reflect 10 s, Release 90 s, Recharge 20 s.
export const DURATION = 120;
export const stages = {reflect:[0,10], release:[10,100], recharge:[100,120]};
export class Session {
  constructor() { this.elapsed=0; this.running=false; this.last=null; }
  get phase() { return this.elapsed < 10 ? 'reflect' : this.elapsed < 100 ? 'release' : this.elapsed < 120 ? 'recharge' : 'done'; }
  get remaining() { const end=stages[this.phase]?.[1] ?? DURATION; return Math.max(0,Math.ceil(end-this.elapsed)); }
  get totalRemaining() { return Math.max(0, Math.ceil(DURATION-this.elapsed)); }
  resume(now) { if (!this.running && this.elapsed<DURATION) { this.running=true; this.last=now; } }
  tick(now) {
    if (!this.running) return;
    this.elapsed=Math.min(DURATION,this.elapsed+Math.max(0,now-this.last)/1000);
    this.last=now;
    if (this.elapsed===DURATION) { this.running=false; this.last=null; }
  }
  pause(now) { this.tick(now); this.running=false; this.last=null; }
}
// Adapted from Erin's approved v7; one gentle 4-in / 6-out rhythm, no holds.
export function breathAt(elapsed) {
  const t=((elapsed%10)+10)%10;
  return t<4 ? {label:'Breathe in',count:Math.ceil(4-t),scale:.85+.30*(t/4)} : {label:'Breathe out',count:Math.ceil(10-t),scale:1.15-.30*((t-4)/6)};
}
export function formatTime(seconds) { return `${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}`; }
export function shouldReturnToBay(session, category) { return session.elapsed>=10 && !category; }
