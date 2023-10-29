/* eslint-disable max-len */
import * as constants from './challengeTypeConstants';
import markStorySubmission from './checkAnswer';
import getReactFiber from '../getReactFiber';
import newConsole from '../setUpConsole';

newConsole.log('Adding story listeners');

function addStoryListener(storyChoice) {
  storyChoice.addEventListener(
    'click',
    (e) => {
      const parent = storyChoice.closest(constants.STORY_PARENT);
      if (!parent) {
        return;
      }

      const storyData = getReactFiber(parent)?.return?.memoizedProps?.storyElement;

      if (storyData && !markStorySubmission(storyData, storyChoice)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    },
  );
}

document.addEventListener(
  'keydown',
  (e) => {
    if (/^\d$/.test(e.key)) {
      newConsole.log('match key listener');
      const previouslyClicked = document.querySelector(constants.MATCH_BUTTON_SELECTED);
      if (!previouslyClicked) {
        newConsole.log('No previously clicked');
        return;
      }

      const buttons = Array.from(document.querySelectorAll(constants.MATCH_BUTTONS));
      const button = buttons.find((x) => {
        const number = x.querySelector(constants.MATCH_BUTTON_NUMBER_SELECTED)
        ?? x.querySelector(constants.MATCH_BUTTON_NUMBER_UNSELECTED)
        ?? x.querySelector(constants.MATCH_BUTTON_NUMBER_GREYED);
        return number.innerText === e.key;
      });

      const parent = button.closest(constants.STORY_PARENT);
      const storyData = getReactFiber(parent)?.return?.memoizedProps?.storyElement;

      if (!storyData) {
        newConsole.log('No story data');
        return;
      }

      const previousText = previouslyClicked.querySelector(constants.MATCH_BUTTON_TEXT).textContent;
      const currentText = button.querySelector(constants.MATCH_BUTTON_TEXT).textContent;

      newConsole.log(previouslyClicked);
      newConsole.log(button);
      newConsole.log(previousText);
      newConsole.log(currentText);
      const correct = previousText === currentText
        ? true
        : Object.values(storyData.matches).some((pair) => (previousText === pair.phrase && currentText === pair.translation)
          || (currentText === pair.phrase && previousText === pair.translation));

      if (!correct) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }
  },
);

const observerStory = new MutationObserver(() => {
  const storyChoices = document.querySelectorAll(constants.STORY_CHOICE);
  if (storyChoices.length > 0) {
    storyChoices.forEach((button) => addStoryListener(button));
  }

  const tapTokens = document.querySelectorAll(constants.STORY_TOKENS);
  if (tapTokens.length > 0) {
    tapTokens.forEach((button) => addStoryListener(button));
  }

  const matchButtons = document.querySelectorAll(constants.MATCH_BUTTONS);
  if (matchButtons.length > 0) {
    matchButtons.forEach((button) => addStoryListener(button));
  }
});

observerStory.observe(document.body, { childList: true, subtree: true });
