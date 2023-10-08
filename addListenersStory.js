import { n as newConsole, g as getReactFiber } from './getReactFiber-56206b7a.js';

const STORY_CHOICE = '[data-test="stories-choice"]';

const STORY_TOKENS = '[data-test="challenge-tap-token-text"]';
const STORY_TOKEN_SELECTED = '[class="LhRk3 WOZnx _275sd _1ZefG notranslate _6Nozy _1O290 _2HRY_"]';
const STORY_TOKEN_BANK = '[data-test="stories-element"]';

const MATCH_BUTTONS = '[class="_1deIS"]';
const MATCH_BUTTON_SELECTED = '[class="WOZnx _275sd _1ZefG notranslate _6Nozy _1O290 _2HRY_ pmjld edf-m"]';
const MATCH_BUTTON_TEXT = '[data-test="challenge-tap-token-text"]';

const POINT_TO_PHRASE_BUTTON_BANK = '[class="_3jGFa _1RoWn"]';
const POINT_TO_PHRASE_BUTTON = '[data-test="challenge-tap-token-text"]';

/* eslint-disable max-len */

function markStorySubmission(storyData, button) {
  switch (storyData.type) {
    case 'ARRANGE': {
      const tokenBank = button.closest(STORY_TOKEN_BANK);
      const selectedButtonCount = tokenBank.querySelectorAll(STORY_TOKEN_SELECTED).length;
      const phraseArray = storyData.selectablePhrases;
      const correctOrder = storyData.phraseOrder;
      const correctButtonContent = phraseArray[correctOrder[selectedButtonCount]];
      return button.textContent === correctButtonContent;
    }

    case 'MULTIPLE_CHOICE': {
      const answerArray = storyData.answers;
      const correctID = storyData.correctAnswerIndex;
      const buttonText = button.nextElementSibling.textContent;
      const correctText = answerArray[correctID].text;
      return correctText === buttonText;
    }

    case 'POINT_TO_PHRASE': {
      const buttonBank = button.closest(POINT_TO_PHRASE_BUTTON_BANK);
      const buttons = Array.from(buttonBank.querySelectorAll(POINT_TO_PHRASE_BUTTON));
      const correctIndex = storyData.correctAnswerIndex;
      const correctButton = buttons[correctIndex];
      return button.innerText === correctButton.innerText;
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

function markMatchSubmission(storyData, word1, word2) {
  if (word1 === word2) {
    return true;
  }
  newConsole.log(storyData);
  newConsole.log(word1);
  newConsole.log(word2);
  return Object.values(storyData.matches).some((pair) => (word1 === pair.phrase && word2 === pair.translation)
  || (word2 === pair.phrase && word1 === pair.translation));
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
      newConsole.log(storyData);
      if (!markStorySubmission(storyData, button)) {
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
      const previouslyClicked = document.querySelector(MATCH_BUTTON_SELECTED);
      if (!previouslyClicked) {
        return;
      }

      const previousText = previouslyClicked.querySelector(MATCH_BUTTON_TEXT).textContent;
      const button = e.target;
      const currentText = button.textContent;
      const question = button.closest('[class="_35e5D"]');
      const storyData = getReactFiber(question).return.memoizedProps.storyElement;

      if (!markMatchSubmission(storyData, previousText, currentText)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    },
  );
}

const observerStory = new MutationObserver(() => {
  const storyChoices = document.querySelectorAll(STORY_CHOICE);
  if (storyChoices.length > 0) {
    storyChoices.forEach((x) => addStoryListener(x));
  }

  const tapTokens = document.querySelectorAll(STORY_TOKENS);
  if (tapTokens.length > 0) {
    tapTokens.forEach((x) => addStoryListener(x));
  }

  const matchButtons = document.querySelectorAll(MATCH_BUTTONS);
  if (matchButtons.length > 0) {
    matchButtons.forEach((button) => addMatchListener(button));
  }
});

observerStory.observe(document.body, { childList: true, subtree: true });
