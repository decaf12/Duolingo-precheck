/* eslint-disable max-len */
import * as constants from './challengeTypeConstants';
import * as check from './checkAnswer';
import getReactFiber from '../getReactFiber';
import newConsole from '../setUpConsole';

newConsole.log('Adding story listeners');

function addStoryListener(storyChoice) {
  storyChoice.addEventListener(
    'click',
    (e) => {
      newConsole.log(storyChoice);
      const parent = storyChoice.closest(constants.STORY_PARENT);
      newConsole.log(parent);
      if (!parent) {
        return;
      }

      const storyData = getReactFiber(parent)?.return?.memoizedProps?.storyElement;
      newConsole.log(storyData);

      if (storyData && !check.markStorySubmission(storyData, storyChoice)) {
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
      const buttons = Array.from(document.querySelectorAll(constants.MATCH_BUTTONS));
      if (!buttons.length) {
        return;
      }

      const button = buttons.find((x) => {
        newConsole.log(x);
        const number = x.querySelector(constants.MATCH_BUTTON_NUMBER_SELECTED)
        ?? x.querySelector(constants.MATCH_BUTTON_NUMBER_UNSELECTED)
        ?? x.querySelector(constants.MATCH_BUTTON_NUMBER_GREYED);
        return number?.innerText === e.key;
      });

      if (!button) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }

      const parent = button.closest(constants.STORY_PARENT);
      const storyData = getReactFiber(parent)?.return?.memoizedProps?.storyElement;

      if (storyData && !check.storyMatchKeyboard(storyData, button)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }
  },
);

const observerStory = new MutationObserver(() => {
  const checkboxes = document.querySelectorAll(constants.STORY_CHECKBOX);
  if (checkboxes.length > 0) {
    newConsole.log('Adding checkboxes');
    newConsole.log(checkboxes);
    checkboxes.forEach((button) => addStoryListener(button));
  }

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
