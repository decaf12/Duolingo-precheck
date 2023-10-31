/* eslint-disable max-len */
import * as constants from './challengeTypeConstants';
import * as check from './checkAnswer';
import getReactFiber from '../getReactFiber';
import newConsole from '../setUpConsole';

newConsole.log('Adding lesson listeners');

function getChallengeDataLesson() {
  const solution = document.querySelector('.mQ0GW');
  return getReactFiber(solution)?.return?.return?.stateNode?.props?.currentChallenge;
}

function checkSubmission(submissionButton) {
  newConsole.log(submissionButton);
  // If the button is "Check" then do not propagate the keypress.
  if (submissionButton?.querySelector(constants.SUBMISSION_BUTTON_SPAN)?.innerHTML !== 'Check') {
    newConsole.log('button is not check');
    return true;
  }

  const challengeData = getChallengeDataLesson();
  newConsole.log(challengeData);

  return check.markSubmission(challengeData);
}

function matchCorrect(challengeData, button) {
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
  const previouslyClicked = document.querySelector(constants.MATCH_BUTTON_SELECTED);
  if (!previouslyClicked) {
    return true;
  }
  const currClicked = button.getElementsByTagName('button')[0];
  const prevIsSound = previouslyClicked.querySelector(constants.LISTENMATCH_SOUNDWAVE) !== null;
  const currIsSound = currClicked.querySelector(constants.LISTENMATCH_SOUNDWAVE) !== null;
  if (prevIsSound === currIsSound) {
    return true;
  }

  const previousText = previouslyClicked.getAttribute('data-test');
  const currentText = currClicked.getAttribute('data-test');
  return previousText === currentText;
}

function getButton(key) {
  const buttons = Array.from(document.querySelectorAll(constants.MATCH_BUTTONS));
  const button = buttons.find((x) => {
    const number = x.querySelector(constants.MATCH_BUTTON_NUMBER_SELECTED)
    ?? x.querySelector(constants.MATCH_BUTTON_NUMBER_UNSELECTED)
    ?? x.querySelector(constants.MATCH_BUTTON_NUMBER_GREYED);
    return number.innerText === key;
  });

  return button;
}

// Check user submission whenever the Enter key is pressed
document.addEventListener(
  'keydown',
  (e) => {
    if (e.key === 'Enter') {
      newConsole.log('Enter key pressed');
      const submissionButton = document.querySelector(constants.SUBMISSION_BUTTON_LESSON);
      if (submissionButton === null) {
        newConsole.log('Null submission button');
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
        newConsole.log(button);
        if (!matchCorrect(challengeData, button)) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      } else if (challengeData.type === 'listenMatch') {
        const button = getButton(e.key);
        if (!listenMatchCorrect(button)) {
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
