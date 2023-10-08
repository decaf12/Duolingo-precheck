import { n as newConsole, g as getReactFiber } from './getReactFiber-56206b7a.js';

const STORY_CHOICE = '[data-test="stories-choice"]';
const STORY_TOKENS = '[data-test="challenge-tap-token-text"]';
const STORY_TOKEN_SELECTED = '[class="LhRk3 WOZnx _275sd _1ZefG notranslate _6Nozy _1O290 _2HRY_"]';
const STORY_TOKEN_BANK = '[data-test="stories-element"]';

/* eslint-disable max-len */

function markStorySubmission(storyData, button) {
  switch (storyData.type) {
    case 'ARRANGE': {
      const tokenBank = button.closest(STORY_TOKEN_BANK);
      const selectedButtonCount = tokenBank.querySelectorAll(STORY_TOKEN_SELECTED).length;
      const phraseArray = storyData.selectablePhrases;
      const correctOrder = storyData.phraseOrder;
      const correctButtonContent = phraseArray[correctOrder[selectedButtonCount]];
      newConsole.log(storyData);
      newConsole.log(button);
      newConsole.log(tokenBank);
      newConsole.log(selectedButtonCount);
      newConsole.log(phraseArray);
      newConsole.log(correctOrder);
      newConsole.log(correctButtonContent);
      return button.textContent === correctButtonContent;
    }

    case 'MULTIPLE_CHOICE': {
      const answerArray = storyData.answers;
      const correctID = storyData.correctAnswerIndex;
      const buttonText = button.nextElementSibling.textContent;
      const correctText = answerArray[correctID].text;
      return correctText === buttonText;
    }

    case 'SELECT_PHRASE': {
      const answerArray = storyData.answers;
      const correctID = storyData.correctAnswerIndex;
      const correctText = answerArray[correctID];
      const buttonText = button.innerText;
      return correctText === buttonText;
    }

    default:
      return false;
  }
}

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
      if (!markStorySubmission(storyData, button)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    },
  );
}

const observerStory = new MutationObserver(() => {
  const matchButtons = document.querySelectorAll(STORY_CHOICE);
  if (matchButtons.length > 0) {
    matchButtons.forEach((x) => addStoryListener(x));
  }

  const tapTokens = document.querySelectorAll(STORY_TOKENS);
  if (tapTokens.length > 0) {
    tapTokens.forEach((x) => addStoryListener(x));
  }
});

observerStory.observe(document.body, { childList: true, subtree: true });
