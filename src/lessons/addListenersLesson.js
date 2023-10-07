/* eslint-disable max-len */
import * as constants from './challengeTypeConstants';
import * as check from './checkAnswer';
import getReactFiber from '../getReactFiber';

const lessonFrame = document.createElement('iframe');
lessonFrame.style = 'display: none';
document.body.appendChild(lessonFrame);
const lessonConsole = lessonFrame.contentWindow.console;
lessonConsole.log('Adding lesson listeners');

function getChallengeDataLesson() {
  const solution = document.querySelector('.mQ0GW');
  if (solution === null) {
    return null;
  }
  return getReactFiber(solution).return.return.stateNode.props.currentChallenge;
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

    if (!checkSubmission(submissionButton)) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  },
);

function addMatchListener(challengeData, button) {
  button.addEventListener('click', (e) => {
    const previouslyClicked = document.querySelector(constants.MATCH_BUTTON_SELECTED);
    if (!previouslyClicked) {
      return;
    }

    const previousText = previouslyClicked.querySelector(constants.MATCH_BUTTON_TEXT).textContent;
    const currentButton = button.textContent;
    const currentText = currentButton.slice(1);

    if (!check.markMatch(challengeData, previousText, currentText)) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  });
}

function addListenMatchListener(button) {
  button.addEventListener('click', (e) => {
    const previouslyClicked = document.querySelector(constants.MATCH_BUTTON_SELECTED);
    if (!previouslyClicked) {
      return;
    }

    const previousText = previouslyClicked.getAttribute('data-test');
    const currClicked = button.getElementsByTagName('button')[0];
    const currentText = currClicked.getAttribute('data-test');

    if (previousText !== currentText) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  });
}

const observerMatch = new MutationObserver(() => {
  const challengeData = getChallengeDataLesson();
  if (challengeData?.type === 'match') {
    const matchButtons = document.querySelectorAll(constants.MATCH_BUTTONS);
    matchButtons.forEach((x) => addMatchListener(challengeData, x));
  } else if (challengeData?.type === 'listenMatch') {
    const listenMatchButtons = document.querySelectorAll(constants.MATCH_BUTTONS);
    listenMatchButtons.forEach((x) => addListenMatchListener(x));
  }
});

observerMatch.observe(document.body, { childList: true, subtree: true });
