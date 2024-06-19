/* eslint-disable max-len */
import * as constants from './challengeTypeConstants.js';
import * as check from './checkAnswer.js';
import getReactFiber from '../getReactFiber.js';
import newConsole from '../setUpConsole.js';

newConsole.debug('Adding lesson listeners');

function getChallengeDataLesson() {
  const solution = document.querySelector(constants.CHALLENGE_AREA);
  newConsole.info('solution: ', solution);
  if (solution === null) {
    newConsole.debug('Solution not found.');
    return null;
  }
  const fiber = getReactFiber(solution);
  return fiber?.return?.memoizedProps?.challenge;
}

function checkSubmission(submissionButton) {
  // If the button is "Check" then do not propagate the keypress.
  newConsole.debug('checkSubmission() called');
  if (submissionButton?.querySelector(constants.SUBMISSION_BUTTON_SPAN)?.innerHTML !== 'Check') {
    newConsole.debug('Button is not submit');
    return true;
  }

  newConsole.debug('Checking submission');
  const challengeData = getChallengeDataLesson();
  newConsole.info('challengeData: ', challengeData);

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
  newConsole.debug('listenMatchCorrect()');
  newConsole.debug('button: ', button);
  newConsole.debug('button group: ', button.parentNode);
  const previouslyClicked = button.parentNode.querySelector(constants.MATCH_BUTTON_SELECTED);
  newConsole.debug('previouslyClicked: ', previouslyClicked);
  if (!previouslyClicked) {
    return true;
  }

  const currClicked = button.querySelector('button');
  newConsole.debug('currClicked: ', currClicked);

  const prevIsSound = previouslyClicked.querySelector(constants.LISTENMATCH_SOUNDWAVE) !== null;
  newConsole.debug('prevIsSound: ', prevIsSound);
  const currIsSound = currClicked.querySelector(constants.LISTENMATCH_SOUNDWAVE) !== null;
  newConsole.debug('currIsSound: ', currIsSound);
  if (prevIsSound === currIsSound) {
    return true;
  }

  const previousText = previouslyClicked.getAttribute('data-test');
  newConsole.debug('previousText', previousText);
  
  const currentText = currClicked.getAttribute('data-test');
  newConsole.debug('currentText', currentText);
  return previousText === currentText;
}

function getButton(key) {
  newConsole.debug('getButton');
  const buttons = Array.from(document.querySelectorAll(constants.MATCH_BUTTONS));
  newConsole.debug('buttons: ', buttons);
  const button = buttons.find((x) => {
    const number = x.querySelector(constants.MATCH_BUTTON_NUMBER);
    return number?.innerText === key;
  });

  newConsole.debug('buttons ', button);
  return button;
}

// Check user submission whenever the Enter key is pressed
document.addEventListener(
  'keydown',
  (e) => {
    if (e.key === 'Enter') {
      newConsole.debug('Enter key pressed');
      const submissionButton = document.querySelector(constants.SUBMISSION_BUTTON_LESSON);
      newConsole.debug('submissionButton: ', submissionButton);
      if (submissionButton === null) {
        return;
      }

      if (!checkSubmission(submissionButton)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    } else if (/^\d$/.test(e.key)) {
      const challengeData = getChallengeDataLesson();
      if (challengeData.type === 'match') {
        const button = getButton(e.key);
        if (!matchCorrect(challengeData, button)) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      } else if (challengeData.type === 'listenMatch') {
        const button = getButton(e.key);
        newConsole.debug(button);
        if (!listenMatchCorrect(button)) {
          newConsole.debug('listenMatch incorrect match.');
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