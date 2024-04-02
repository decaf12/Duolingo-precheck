/* eslint-disable max-len */
import * as constants from './challengeTypeConstants.js';
import * as check from './checkAnswer.js';
import getReactFiber from '../getReactFiber.js';
import newConsole from '../setUpConsole.js';

newConsole.log('Adding story listeners');

function addStoryListener(storyChoice) {
  storyChoice.addEventListener(
    'click',
    (e) => {
      newConsole.log('addStoryListener');
      newConsole.log('storyChoice', storyChoice);
      const parent = storyChoice.closest(constants.STORY_PARENT);
      newConsole.log('parent', parent);
      if (!parent) {
        return;
      }

      const answerKey = parent.querySelector(constants.STORY_ANSWERKEY);
      newConsole.log('answerKey', answerKey);

      const fiber = getReactFiber(answerKey);
      newConsole.log('fiber', fiber);

      const storyData = fiber?.return?.memoizedProps?.challengeElement;
      newConsole.log('storyData', storyData);

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

      if (storyData && !check.markStoryMatch(storyData, button)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }
  },
);

const observerStory = new MutationObserver(() => {
  newConsole.log('Adding listeners to story buttons');
  const checkboxes = document.querySelectorAll(constants.STORY_CHECKBOX);
  newConsole.log('checkboxes', checkboxes);
  if (checkboxes.length > 0) {
    newConsole.log('Story checkboxes found.');
    checkboxes.forEach((button) => {
      newConsole.log('adding story listener to checkbox');
      addStoryListener(button);
    });
  }

  const storyChoices = document.querySelectorAll(constants.STORY_CHOICE);
  newConsole.log('storyChoices', storyChoices);
  if (storyChoices.length > 0) {
    newConsole.log('Story story choices found.');
    storyChoices.forEach((button) => addStoryListener(button));
  }

  const tapTokens = document.querySelectorAll(constants.STORY_TOKENS);
  newConsole.log('tapTokens', tapTokens);
  if (tapTokens.length > 0) {
    newConsole.log('Story tap tokens found.');
    tapTokens.forEach((button) => addStoryListener(button));
  }

  const matchButtons = document.querySelectorAll(constants.MATCH_BUTTONS);
  newConsole.log('matchButtons', matchButtons);
  if (matchButtons.length > 0) {
    newConsole.log('Story match buttons found.');
    matchButtons.forEach((button) => addStoryListener(button));
  }
});

observerStory.observe(document.body, { childList: true, subtree: true });
