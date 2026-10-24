import test from 'node:test';
import assert from 'node:assert/strict';
import {Session, breathAt, formatTime, shouldReturnToBay} from '../dist/session.mjs';
import {groups, supportFor} from '../dist/content.mjs';

test('wireframe sequence is 10 seconds, 90 seconds, 20 seconds; total exactly 120',()=>{
  const s=new Session();s.resume(0);
  assert.equal(s.phase,'reflect');assert.equal(s.remaining,10);
  s.tick(9999);assert.equal(s.phase,'reflect');
  s.tick(10000);assert.equal(s.phase,'release');assert.equal(s.remaining,90);
  s.tick(99999);assert.equal(s.phase,'release');
  s.tick(100000);assert.equal(s.phase,'recharge');assert.equal(s.remaining,20);
  s.tick(120000);assert.equal(s.phase,'done');assert.equal(s.elapsed,120);assert.equal(s.running,false);
  s.resume(130000);s.tick(140000);assert.equal(s.elapsed,120);assert.equal(s.running,false);
});
test('pausing excludes time away and resumes without resetting the current step',()=>{
  const s=new Session();s.resume(100);s.pause(5100);
  s.tick(50000);assert.equal(s.elapsed,5);
  s.resume(60000);s.resume(61000);s.tick(65000);assert.equal(s.elapsed,10);
});
test('sleep and delayed ticks catch up correctly without overshooting',()=>{
  const s=new Session();s.resume(200);s.tick(120500);assert.equal(s.elapsed,120);assert.equal(s.remaining,0);
});
test('an untouched check-in returns to the bay at ten seconds',()=>{
  const s=new Session();s.resume(0);s.tick(9999);assert.equal(shouldReturnToBay(s,null),false);
  s.tick(10000);assert.equal(shouldReturnToBay(s,null),true);assert.equal(shouldReturnToBay(s,'alone'),false);
});
test('breathing expands for four seconds, contracts for six, then repeats',()=>{
  assert.deepEqual(breathAt(0),{label:'Breathe in',count:4,scale:.85});
  assert.equal(breathAt(3.99).label,'Breathe in');assert.equal(breathAt(4).label,'Breathe out');
  assert.equal(breathAt(4).count,6);assert.equal(breathAt(9.99).label,'Breathe out');
  assert.equal(breathAt(10).label,'Breathe in');assert.ok(breathAt(2).scale>breathAt(0).scale);
  assert.ok(breathAt(8).scale<breathAt(4).scale);
});
test('all six wireframe selections and alone have complete, distinct support',()=>{
  const actions=new Set();
  for(const [category,group] of Object.entries(groups))for(const [choice] of group.options){
    const entry=supportFor(category,choice);assert.equal(entry.cue.length,3);
    for(const text of [...entry.cue,entry.joke,entry.reminder,entry.action])assert.ok(text.length>10);
    actions.add(entry.action);
  }
  assert.equal(actions.size,6);assert.ok(supportFor('alone',null).action.includes('colleague'));
});
test('category-only and invalid choices still provide appropriate reset content',()=>{
  assert.equal(supportFor('overworked',null).action,supportFor('overworked','relax').action);
  assert.equal(supportFor('disrespected','grade').action,supportFor('disrespected','own-failings').action);
  assert.ok(supportFor('bad','bad').action);
});
test('optional feeling is bounded and does not alter the source content',()=>{
  assert.ok(supportFor('alone',null,'worried').cue[0].includes('worried'));
  assert.ok(!supportFor('alone',null).cue[0].includes('worried'));
  assert.ok(!supportFor('alone',null,'a'.repeat(90)).cue[0].includes('a'.repeat(41)));
});
test('timer labels match wireframe',()=>{
  assert.equal(formatTime(10),'0:10');assert.equal(formatTime(90),'1:30');assert.equal(formatTime(20),'0:20');
});
