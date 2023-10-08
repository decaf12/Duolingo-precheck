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
      const button = e.target;

      const parent = storyChoice.closest(constants.STORY_PARENT);
      const matchData = getReactFiber(parent)?.return?.memoizedProps?.storyElement;
      let isCorrect = false;
      if (matchData !== undefined) {
        const previouslyClicked = document.querySelector(constants.MATCH_BUTTON_SELECTED);
        if (!previouslyClicked) {
          return;
        }
        const previousText = previouslyClicked.querySelector(constants.MATCH_BUTTON_TEXT).textContent;
        const currentText = button.textContent;
        isCorrect = check.markMatchSubmission(matchData, previousText, currentText);
      } else {
        const question = parent.previousSibling;
        const storyData = getReactFiber(question).return.memoizedProps.challengeElement;
        isCorrect = check.markStorySubmission(storyData, button);
      }

      if (!isCorrect) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    },
  );
}

const observerStory = new MutationObserver(() => {
  const storyChoices = document.querySelectorAll(constants.STORY_CHOICE);
  if (storyChoices.length > 0) {
    storyChoices.forEach((x) => addStoryListener(x));
  }

  const tapTokens = document.querySelectorAll(constants.STORY_TOKENS);
  if (tapTokens.length > 0) {
    tapTokens.forEach((x) => addStoryListener(x));
  }
});

observerStory.observe(document.body, { childList: true, subtree: true });
