// State Variables initialized as null / empty as specified in wireframe
let stressSource = null;
let respect = null;
let textboxAlone = "";

const btnBegin = document.getElementById('btn-begin');
const appLanding = document.getElementById('app-landing');
const appHeader = document.getElementById('app-header');
const step1 = document.getElementById('step-1');

btnBegin.addEventListener('click', () => {
  // 1. Hide the Begin button and landing section (which removes the breathe guide visual)
  btnBegin.style.display = 'none';
  appLanding.hidden = true;

  // 2. Reset / Initialize state variables
  stressSource = null;
  respect = null;
  textboxAlone = "";

  // 3. Reveal top header bar (progress & timer) and activate step-1
  appHeader.hidden = false;
  step1.hidden = false;
});