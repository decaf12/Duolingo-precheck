/* eslint-disable max-len */
import * as constants from './challengeTypeConstants';
import * as check from './checkAnswer';
import getReactFiber from '../getReactFiber';
import newConsole from '../setUpConsole';

const getChallengeDataLesson = () => {
  const solution = document.querySelector(constants.CHALLENGE_AREA);

  if (!solution) {
    return null;
  }

  const fiber = getReactFiber(solution);
  return fiber?.return?.memoizedProps?.challenge;
};

const checkSubmission = (submissionButton) => {
  if (submissionButton?.querySelector(constants.SUBMISSION_BUTTON_SPAN)?.innerHTML !== 'Check') {
    return true;
  }

  const challengeData = getChallengeDataLesson();
  newConsole.log('challengeData', challengeData);
  return check.markSubmission(challengeData);
};

const matchCorrect = (challengeData, button) => {
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
};

const listenMatchCorrect = (button) => {
  const previouslyClicked = button.parentNode.querySelector(constants.MATCH_BUTTON_SELECTED);
  if (!previouslyClicked) {
    return true;
  }

  const currClicked = button.querySelector('button');

  const prevIsSound = previouslyClicked.querySelector(constants.LISTENMATCH_SOUNDWAVE) !== null;
  const currIsSound = currClicked.querySelector(constants.LISTENMATCH_SOUNDWAVE) !== null;
  if (prevIsSound === currIsSound) {
    return true;
  }

  const previousText = previouslyClicked.getAttribute('data-test');
  const currentText = currClicked.getAttribute('data-test');
  return previousText === currentText;
};

const getButton = (key) => {
  const buttons = Array.from(document.querySelectorAll(constants.MATCH_BUTTONS));

  return buttons.find((x) => {
    const number = x.querySelector(constants.MATCH_BUTTON_NUMBER);
    return number?.innerText === key;
  });
};

// Check user submission whenever the Enter key is pressed
document.addEventListener(
  'keydown',
  (e) => {
    if (e.key === 'Enter') {
      const submissionButton = document.querySelector(constants.SUBMISSION_BUTTON_LESSON);
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
