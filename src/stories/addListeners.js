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
    const submissionButtonLesson = document.querySelector(constants.SUBMISSION_BUTTON_LESSON);
    if (submissionButtonLesson === null && submissionButtonStory === null) {
      console.log('Neither button found');
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();
    
    if (submissionButtonLesson !== null) {
      if (checkLessonSubmission(submissionButtonLesson)) {
        submissionButtonLesson.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        console.log('translation correct');
      } else {
        console.log('translation incorrect');
      }
    } else {
      if (checkStorySubmission(submissionButtonStory)) {
        submissionButtonStory.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      }
    }
  }
);

function checkLessonSubmission(submissionButton) {
  // If the button is "Check" then do not propagate the keypress.
  if (submissionButton?.querySelector(constants.SUBMISSION_BUTTON_SPAN)?.innerHTML !== 'Check') {
    return true;
  }

  const challengeData = getChallengeDataLesson();
  console.log(challengeData);
  console.log(challengeData.type);
      
  return check.markSubmission(challengeData);
}

function checkStorySubmission(submissionButton) {
  if (submissionButton.innerHTML !== 'Continue') {
    return true;
  }

  const challengeData = getChallengeDataStory();
  if (challengeData === null) {
    return true;
  }
  console.log(challengeData);
  return false;
}

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


function getChallengeDataLesson() {
  const solution = document.querySelector(".mQ0GW");
  if (solution === null) {
    return null;
  }
  const reactFiber = Object.keys(solution).find((s) => s.startsWith('__reactFiber$'));
  return solution[reactFiber].return.return.stateNode.props.currentChallenge;
}

function getChallengeDataStory() {
  const solution = document.querySelector("[class=\"_35e5D\"]");
  const reactFiber = Object.keys(solution).find((s) => s.startsWith('__reactFiber$'));
  return solution[reactFiber].return.memoizedProps.storyElement;
}