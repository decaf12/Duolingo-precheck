/* eslint-disable max-len */
import * as constants from './challenge-type-constants';
import { getChallengeDataLesson } from './utils/get-challenge-data';
import { checkSubmission } from './utils/check-submission';
import { checkMatch } from './utils/check-match';

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
        if (!checkMatch(challengeData, button)) {
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
        if (!checkMatch(challengeData, button)) {
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
