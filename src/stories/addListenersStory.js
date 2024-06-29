/* eslint-disable max-len */
import * as constants from './challengeTypeConstants.js';
import * as check from './checkAnswer.js';
import getReactFiber from '../getReactFiber.js';
import newConsole from '../setUpConsole.js';

function addStoryListener(storyChoice) {
  ['click', 'keydown'].forEach((e) => {
    storyChoice.addEventListener(
      e,
      (e) => {
        newConsole.debug('storyChoice', storyChoice);
        const parent = storyChoice.closest(constants.STORY_PARENT);
        newConsole.debug('parent', parent);
        if (!parent) {
          return;
        }
        const fiber = getReactFiber(parent);
        const storyData = fiber?.return?.memoizedProps?.challengeElement
                          ?? fiber?.return?.memoizedProps?.storyElement;
        if (storyData && !check.markStorySubmission(storyData, storyChoice)) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      },
    );
  });
}

document.addEventListener(
  'keydown',
  (e) => {
    if (/^\d$/.test(e.key)) {
      const matchButtonGroup = document.querySelector(constants.MATCH_BUTTON_GROUP);

      const buttons = Array.from(matchButtonGroup.querySelectorAll('button'));
      if (!buttons.length) {
        return;
      }

      const button = buttons.find((x) => {
        const number = x.querySelector(constants.MATCH_BUTTON_NUMBER);
        return number?.innerText === e.key;
      });

      if (!button) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }

      const parent = button.closest(constants.STORY_PARENT);

      const storyData = getReactFiber(parent)?.return?.memoizedProps?.storyElement;

      if (storyData && !check.markStoryMatch(storyData, button)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }
  },
);

const observerStory = new MutationObserver(() => {
  const checkboxes = document.querySelectorAll(constants.STORY_CHECKBOX);
  if (checkboxes.length > 0) {
    checkboxes.forEach((button) => {
      addStoryListener(button);
    });
  }

  const storyChoices = document.querySelectorAll(constants.STORY_CHOICE);
  if (storyChoices.length > 0) {
    storyChoices.forEach((button) => addStoryListener(button));
  }

  const tapTokens = document.querySelectorAll(constants.STORY_TOKENS);
  if (tapTokens.length > 0) {
    tapTokens.forEach((button) => addStoryListener(button));
  }

  const matchButtonGroup = document.querySelector(constants.MATCH_BUTTON_GROUP);

  if (!matchButtonGroup) {
    return;
  }

  const matchButtons = matchButtonGroup.querySelectorAll('li');

  if (matchButtons.length > 0) {
    matchButtons.forEach((button) => addStoryListener(button));
  }
});

observerStory.observe(document.body, { childList: true, subtree: true });
