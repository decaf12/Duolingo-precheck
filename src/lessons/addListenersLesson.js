import * as constants from './challengeTypeConstants';
import * as check from './checkAnswer';

const lessonFrame = document.createElement('iframe');
lessonFrame.style = 'display: none';
document.body.appendChild(lessonFrame);
const lessonConsole = lessonFrame.contentWindow.console;
lessonConsole.log('Adding lesson listeners');

function getChallengeDataLesson() {
  const solution = document.querySelector(".mQ0GW");
  if (solution === null) {
    return null;
  }
  const reactFiber = Object.keys(solution).find((s) => s.startsWith('__reactFiber$'));
  return solution[reactFiber].return.return.stateNode.props.currentChallenge;
}

function checkSubmission(submissionButton) {
  // If the button is "Check" then do not propagate the keypress.
  if (submissionButton?.querySelector(constants.SUBMISSION_BUTTON_SPAN)?.innerHTML !== 'Check') {
    return true;
  }

  const challengeData = getChallengeDataLesson();
  lessonConsole.log(challengeData);
  lessonConsole.log(challengeData.type);

  return check.markSubmission(challengeData);
}

// Check user submission whenever the Enter key is pressed
document.addEventListener(
  'keydown',
  (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    const submissionButton = document.querySelector(constants.SUBMISSION_BUTTON_LESSON);
    if (submissionButton === null) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();

    if (checkSubmission(submissionButton)) {
      submissionButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      lessonConsole.log('translation correct');
    } else {
      lessonConsole.log('translation incorrect');
    }
  },
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
  const challengeData = getChallengeDataLesson();
  if (challengeData?.type === 'match') {
    const matchButtons = document.querySelectorAll(constants.MATCH_BUTTONS);
    matchButtons.forEach((x) => addMatchListener(challengeData, x));
  }
});

observer.observe(document.body, { childList: true, subtree: true });
