/* eslint-disable max-len */
import * as constants from './challengeTypeConstants.js';
import * as check from './checkAnswer.js';
import getReactFiber from '../getReactFiber.js';
import newConsole from '../setUpConsole.js';

newConsole.debug('Adding story listeners');

function addStoryListener(storyChoice) {
  newConsole.debug('addStoryListener() on', storyChoice);
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
        newConsole.debug('fiber', fiber);
  
        const storyData = fiber?.return?.memoizedProps?.challengeElement ??
                          fiber?.return?.memoizedProps?.storyElement;
        newConsole.debug('storyData', storyData);
  
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
      newConsole.debug('matchButtonGroup', matchButtonGroup);

      const buttons = Array.from(matchButtonGroup.querySelectorAll('button'));
      newConsole.debug('buttons', buttons);
      if (!buttons.length) {
        return;
      }

      const button = buttons.find((x) => {
        newConsole.debug('Story match button: ', x);
        const number = x.querySelector(constants.MATCH_BUTTON_NUMBER);
        return number?.innerText === e.key;
      });

      newConsole.debug('Story match button selected: ', button);
      if (!button) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }

      const parent = button.closest(constants.STORY_PARENT);
      newConsole.debug('parent: ', parent);

      const storyData = getReactFiber(parent)?.return?.memoizedProps?.storyElement;
      newConsole.debug('storyData: ', storyData);

      if (storyData && !check.markStoryMatch(storyData, button)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }
  },
);

const observerStory = new MutationObserver(() => {
  newConsole.debug('Adding listeners to story buttons');
  const checkboxes = document.querySelectorAll(constants.STORY_CHECKBOX);
  newConsole.debug('checkboxes', checkboxes);
  if (checkboxes.length > 0) {
    newConsole.debug('Story checkboxes found.');
    checkboxes.forEach((button) => {
      newConsole.debug('adding story listener to checkbox');
      addStoryListener(button);
    });
  }

  const storyChoices = document.querySelectorAll(constants.STORY_CHOICE);
  newConsole.debug('storyChoices', storyChoices);
  if (storyChoices.length > 0) {
    newConsole.debug('Story story choices found.');
    storyChoices.forEach((button) => addStoryListener(button));
  }

  const tapTokens = document.querySelectorAll(constants.STORY_TOKENS);
  newConsole.debug('tapTokens', tapTokens);
  if (tapTokens.length > 0) {
    newConsole.debug('Story tap tokens found.');
    tapTokens.forEach((button) => addStoryListener(button));
  }

  const matchButtonGroup = document.querySelector(constants.MATCH_BUTTON_GROUP);
  newConsole.debug('matchButtonGroup', matchButtonGroup);

  if (!matchButtonGroup) {
    return;
  }

  const matchButtons = matchButtonGroup.querySelectorAll('li');
  newConsole.debug('matchButtons', matchButtons);
  
  if (matchButtons.length > 0) {
    newConsole.debug('Story match buttons found.');
    matchButtons.forEach((button) => addStoryListener(button));
  }
});

observerStory.observe(document.body, { childList: true, subtree: true });
