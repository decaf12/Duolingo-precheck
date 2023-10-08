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
      const question = button.closest('[class="_35e5D"]').previousSibling;
      const storyData = getReactFiber(question).return.memoizedProps.challengeElement;
      newConsole.log(button);
      newConsole.log(question);
      newConsole.log(storyData);
      if (!check.markStorySubmission(storyData, button)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    },
  );
}

function addMatchListener(storyChoice) {
  storyChoice.addEventListener(
    'click',
    (e) => {
      const previouslyClicked = document.querySelector(constants.MATCH_BUTTON_SELECTED);
      if (!previouslyClicked) {
        return;
      }

      const previousText = previouslyClicked.querySelector(constants.MATCH_BUTTON_TEXT).textContent;
      const button = e.target;
      const currentText = button.textContent;
      const question = button.closest('[class="_35e5D"]');
      const storyData = getReactFiber(question).return.memoizedProps.storyElement;

      if (!check.markMatchSubmission(storyData, previousText, currentText)) {
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

  const matchButtons = document.querySelectorAll(constants.MATCH_BUTTONS);
  if (matchButtons.length > 0) {
    matchButtons.forEach((button) => addMatchListener(button));
  }
});

observerStory.observe(document.body, { childList: true, subtree: true });
