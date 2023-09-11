import * as constants from './challengeTypeConstants';
import * as check from './checkAnswer';


const frame = document.createElement('iframe');
frame.style = "border: 0";
document.body.appendChild(frame);
const console = frame.contentWindow.console;
console.log('Adding listeners');

// Check user submission whenever the Enter key is pressed
document.addEventListener(
  'keydown',
  async (e) => {
    if (e.key !== 'Enter') {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();
    
    const submissionButton = document.querySelector(constants.SUBMISSION_BUTTON);
    // If the button is "Check" then do not propagate the keypress.
    if (submissionButton.querySelector(constants.SUBMISSION_BUTTON_SPAN).innerHTML !== 'Check') {
      submissionButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }

    const challengeData = getChallengeData();
    console.log(challengeData);
    
    console.log(challengeData.type);
        
    const isCorrect = check.markSubmission(challengeData);
    console.log(isCorrect);
    if (isCorrect) {
      frame.contentWindow.console.log("Correct");
      submissionButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }
  }
);

function addMatchListener(challengeData, button) {
  button.addEventListener('click', async (e) => {
    const previouslyClicked = document.querySelector(constants.MATCH_BUTTON_SELECTED);
    if (!previouslyClicked) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();
    
    const previousText = previouslyClicked.querySelector(constants.MATCH_BUTTON_TEXT).textContent;
    const currentButton = button.textContent;
    const buttonNumber = currentButton.slice(0, 1);
    const currentText = currentButton.slice(1);
    
    if (check.markMatch(challengeData, previousText, currentText)) {
      document.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: buttonNumber }));
    }
  });
}

const observer = new MutationObserver(() => {
  const challengeData = getChallengeData();
  console.log(challengeData);
  if (challengeData.type === 'match') {
    const matchButtons = document.querySelectorAll(constants.MATCH_BUTTONS);
    matchButtons.forEach((x) => addMatchListener(challengeData, x));
  }
});

observer.observe(document.body, { childList: true, subtree: true });


function getChallengeData() {
  const solution = document.querySelector(".mQ0GW");
  const reactFiber = Object.keys(solution).find((s) => s.startsWith('__reactFiber$'));
  return solution[reactFiber].return.return.stateNode.props.currentChallenge;
}