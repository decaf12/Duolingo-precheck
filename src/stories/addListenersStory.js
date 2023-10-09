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
      newConsole.log('story event handler running');
      const button = e.target;

      const parent = storyChoice.closest(constants.STORY_PARENT);
      const storyData = getReactFiber(parent)?.return?.memoizedProps?.storyElement;

      if (!markStorySubmission(storyData, button)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    },
  );
}

const observerStory = new MutationObserver(() => {
  const storyChoices = document.querySelectorAll(constants.STORY_CHOICE);
  if (storyChoices.length > 0) {
    newConsole.log('adding story listeners');
    storyChoices.forEach((x) => addStoryListener(x));
  }

  const tapTokens = document.querySelectorAll(constants.STORY_TOKENS);
  if (tapTokens.length > 0) {
    tapTokens.forEach((x) => addStoryListener(x));
  }

  const matchButtons = document.querySelectorAll(constants.MATCH_BUTTONS);
  if (matchButtons.length > 0) {
    matchButtons.forEach((button) => addStoryListener(button));
  }
});

observerStory.observe(document.body, { childList: true, subtree: true });
