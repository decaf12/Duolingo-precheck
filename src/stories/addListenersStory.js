/* eslint-disable max-len */
import * as constants from './challengeTypeConstants.js';
import * as check from './checkAnswer.js';
import getReactFiber from '../getReactFiber.js';
import newConsole from '../setUpConsole.js';

newConsole.log('Adding story listeners');

function addStoryListener(storyChoice) {
  newConsole.log('addStoryListener() on', storyChoice);
    // for (const key in storyChoice) {
    //   if(/^on/.test(key)) {
    //       const eventType = key.substr(2);
    //       storyChoice.addEventListener(eventType, () => {
    //         newConsole.log('event firing', eventType);
    //       });
    //   }
    // }

  ['click', 'keydown'].forEach((e) => {
    storyChoice.addEventListener(
      e,
      (e) => {
        newConsole.log('storyChoice', storyChoice);
        const parent = storyChoice.closest(constants.STORY_PARENT);
        newConsole.log('parent', parent);
        if (!parent) {
          return;
        }
  
        const fiber = getReactFiber(parent);
        newConsole.log('fiber', fiber);
  
        const storyData = fiber?.return?.memoizedProps?.challengeElement ??
                          fiber?.return?.memoizedProps?.storyElement;
        newConsole.log('storyData', storyData);
  
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
      newConsole.log('matchButtonGroup', matchButtonGroup);

      const buttons = Array.from(matchButtonGroup.querySelectorAll('button'));
      newConsole.log('buttons', buttons);
      if (!buttons.length) {
        return;
      }

      const button = buttons.find((x) => {
        newConsole.log('Story match button: ', x);
        const number = x.querySelector(constants.MATCH_BUTTON_NUMBER);
        return number?.innerText === e.key;
      });

      newConsole.log('Story match button selected: ', button);
      if (!button) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }

      const parent = button.closest(constants.STORY_PARENT);
      newConsole.log('parent: ', parent);

      const storyData = getReactFiber(parent)?.return?.memoizedProps?.storyElement;
      newConsole.log('storyData: ', storyData);

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

  const matchButtonGroup = document.querySelector(constants.MATCH_BUTTON_GROUP);
  newConsole.log('matchButtonGroup', matchButtonGroup);

  const matchButtons = matchButtonGroup.querySelectorAll('li');
  newConsole.log('matchButtons', matchButtons);
  
  if (matchButtons.length > 0) {
    newConsole.log('Story match buttons found.');
    matchButtons.forEach((button) => addStoryListener(button));
  }
});

observerStory.observe(document.body, { childList: true, subtree: true });
