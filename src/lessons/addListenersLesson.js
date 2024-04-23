/* eslint-disable max-len */
import * as constants from './challengeTypeConstants.js';
import * as check from './checkAnswer.js';
import getReactFiber from '../getReactFiber.js';
import newConsole from '../setUpConsole.js';

newConsole.log('Adding lesson listeners');

function getChallengeDataLesson() {
  const solution = document.querySelector(constants.CHALLENGE_AREA);
  newConsole.log('solution: ', solution);
  if (solution === null) {
    newConsole.log('Solution not found.');
    return null;
  }
  const fiber = getReactFiber(solution);
  return fiber?.return?.memoizedProps?.challenge;
}

function checkSubmission(submissionButton) {
  // If the button is "Check" then do not propagate the keypress.
  newConsole.log('checkSubmission() called');
  if (submissionButton?.querySelector(constants.SUBMISSION_BUTTON_SPAN)?.innerHTML !== 'Check') {
    newConsole.log('Button is not submit');
    return true;
  }

  newConsole.log('Checking submission');
  const challengeData = getChallengeDataLesson();
  newConsole.log('challengeData: ', challengeData);
  newConsole.log(challengeData);

  return check.markSubmission(challengeData);
}

function matchCorrect(challengeData, button) {
  if (!button) {
    return false;
  }

  const previouslyClicked = document.querySelector(constants.MATCH_BUTTON_SELECTED);
  if (!previouslyClicked) {
    return true;
  }

  const previousText = previouslyClicked.querySelector(constants.MATCH_BUTTON_TEXT).textContent;
  const currentButton = button.textContent;
  const currentText = currentButton.slice(1);
  return check.markMatch(challengeData, previousText, currentText);
}

function listenMatchCorrect(button) {
  newConsole.log('listenMatchCorrect()');
  newConsole.log('button: ', button);
  newConsole.log('button group: ', button.parentNode);
  const previouslyClicked = button.parentNode.querySelector(constants.MATCH_BUTTON_SELECTED);
  newConsole.log('previouslyClicked: ', previouslyClicked);
  if (!previouslyClicked) {
    return true;
  }

  const currClicked = button.querySelector('button');
  newConsole.log('currClicked: ', currClicked);

  const prevIsSound = previouslyClicked.querySelector(constants.LISTENMATCH_SOUNDWAVE) !== null;
  newConsole.log('prevIsSound: ', prevIsSound);
  const currIsSound = currClicked.querySelector(constants.LISTENMATCH_SOUNDWAVE) !== null;
  newConsole.log('currIsSound: ', currIsSound);
  if (prevIsSound === currIsSound) {
    return true;
  }

  const previousText = previouslyClicked.getAttribute('data-test');
  newConsole.log('previousText', previousText);
  
  const currentText = currClicked.getAttribute('data-test');
  newConsole.log('currentText', currentText);
  return previousText === currentText;
}

function getButton(key) {
  newConsole.log('getButton');
  const buttons = Array.from(document.querySelectorAll(constants.MATCH_BUTTONS));
  newConsole.log('buttons: ', buttons);
  const button = buttons.find((x) => {
    const number = x.querySelector(constants.MATCH_BUTTON_NUMBER);
    return number?.innerText === key;
  });

  newConsole.log('buttons ', button);
  return button;
}

// Check user submission whenever the Enter key is pressed
document.addEventListener(
  'keydown',
  (e) => {
    if (e.key === 'Enter') {
      newConsole.log('Enter key pressed');
      const submissionButton = document.querySelector(constants.SUBMISSION_BUTTON_LESSON);
      newConsole.log('submissionButton: ', submissionButton);
      if (submissionButton === null) {
        return;
      }

      if (!checkSubmission(submissionButton)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    } else if (/^\d$/.test(e.key)) {
      const challengeData = getChallengeDataLesson();
      newConsole.log(challengeData);
      newConsole.log(challengeData.type);
      if (challengeData.type === 'match') {
        const button = getButton(e.key);
        if (!matchCorrect(challengeData, button)) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      } else if (challengeData.type === 'listenMatch') {
        const button = getButton(e.key);
        newConsole.log(button);
        if (!listenMatchCorrect(button)) {
          newConsole.log('listenMatch incorrect match.');
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      }
    }
  },
);

const observerMatch = new MutationObserver(() => {
  const challengeData = getChallengeDataLesson();
  if (challengeData?.type === 'match') {
    const matchButtons = document.querySelectorAll(constants.MATCH_BUTTONS);
    matchButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        if (!matchCorrect(challengeData, button)) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      });
    });
  } else if (challengeData?.type === 'listenMatch') {
    const listenMatchButtons = document.querySelectorAll(constants.MATCH_BUTTONS);
    listenMatchButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        if (!listenMatchCorrect(button)) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      });
    });
  }
});

observerMatch.observe(document.body, { childList: true, subtree: true });