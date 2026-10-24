// Shortened from the approved app's classroom support copy; original wording, not research quotations.
export const groups = {
  overworked:{title:'Too much to…',options:[['grade','Grade'],['plan','Plan'],['relax','Relax']]},
  disrespected:{title:'I’m upset with…',options:[['students-parents','Students / parents'],['administrators','Administrators'],['own-failings','Own failings']]},
  alone:{title:'Name the feeling.',options:[]}
};
const rows = {
  grade:{cue:['The pile can wait for one breath.','Feel your feet. Let your shoulders soften.','Choose one useful thing, not the whole pile.'],joke:'My to-do list has started assigning me homework.',reminder:'Your care is bigger than your grading pile.',action:'Look for one learning goal in the next piece of work.'},
  plan:{cue:['A smaller version of the activity still counts.','Let your shoulders settle with the next breath.','Keep one learning goal. Let the extras wait.'],joke:'Today’s lesson plan: practice being flexible.',reminder:'A changed plan can still be a good lesson.',action:'Model the first small step. Then let students try.'},
  relax:{cue:['You have needs in this room, too.','Notice the floor supporting your feet.','Let one nonurgent task wait.'],joke:'My planning period needed its own planning period.',reminder:'You can care deeply and still need a pause.',action:'Return to a familiar routine. Take one thing at a time.'},
  'students-parents':{cue:['A difficult moment does not define your teaching.','Feel your feet. Keep your eyes open.','Pause before choosing your next words.'],joke:'My directions now come with an encore.',reminder:'You can begin again with the next interaction.',action:'Use your familiar attention cue. Model one clear step.'},
  administrators:{cue:['Feeling unsupported is hard.','Unclench your hands and soften your shoulders.','You can ask for one specific kind of help.'],joke:'My calendar has requested a quiet corner.',reminder:'Needing support is part of being human.',action:'Later, ask someone to help you choose one priority.'},
  'own-failings':{cue:['That is a feeling, not a verdict on your teaching.','Let your shoulders soften as you breathe out.','Offer yourself the kindness you give a student.'],joke:'Today I taught flexibility. The lesson was for me.',reminder:'You are learning, just as your students are.',action:'Change one small part of the activity and try again.'},
  alone:{cue:['You do not have to carry every feeling alone.','Notice one steady point beneath your feet.','Think of one person you could talk to later.'],joke:'Even the classroom glue needs a little support.',reminder:'Your feelings deserve care and understanding.',action:'When you can, ask a trusted colleague for a check-in.'},
  general:{cue:['There is room for one breath.','Feel your feet. Let your shoulders settle.','One next step is enough for this moment.'],joke:'Today’s lesson plan: a little flexibility.',reminder:'One difficult moment is only part of your day.',action:'Choose one familiar routine and begin there.'}
};
export function supportFor(category, choice, word='') {
  const valid=groups[category];
  const selected=valid?.options.some(([id])=>id===choice) ? choice : category==='alone' ? 'alone' : category==='overworked' ? 'relax' : category==='disrespected' ? 'own-failings' : 'general';
  const entry=rows[selected];
  const safeWord=String(word).trim().slice(0,40);
  return {...entry,cue:category==='alone'&&safeWord ? [`Notice “${safeWord}”. Let your shoulders settle.`,...entry.cue.slice(1)] : [...entry.cue]};
}
export const grounding = ['Feel both feet on the floor.','Notice three things you can see.','Let your hands rest. Breathe naturally.'];
