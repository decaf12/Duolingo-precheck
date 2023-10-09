import { n as newConsole, g as getReactFiber } from './getReactFiber-56206b7a.js';

const STORY_PARENT = '[class="_35e5D"]';
const STORY_CHOICE = '[data-test="stories-choice"]';

const STORY_TOKENS = '[class="_1deIS"]';
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

    case 'MATCH': {
      const previouslyClicked = document.querySelector(MATCH_BUTTON_SELECTED);
      if (!previouslyClicked) {
        return true;
      }
      const previousText = previouslyClicked.querySelector(MATCH_BUTTON_TEXT).textContent;
      const currentText = button.textContent;
      return previousText === currentText
        ? true
        : Object.values(storyData.matches).some((pair) => (previousText === pair.phrase && currentText === pair.translation)
          || (currentText === pair.phrase && previousText === pair.translation));
    }

    case 'MULTIPLE_CHOICE': {
      const answerArray = storyData.answers;
      const correctID = storyData.correctAnswerIndex;
      const buttonText = button.nextElementSibling.textContent;
      const correctText = answerArray[correctID].text;
      newConsole.log(storyData);
      newConsole.log(button);
      newConsole.log(answerArray);
      newConsole.log(correctID);
      newConsole.log(buttonText);
      newConsole.log(correctText);
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

/* eslint-disable max-len */

newConsole.log('Adding story listeners');

function addStoryListener(storyChoice) {
  storyChoice.addEventListener(
    'click',
    (e) => {
      newConsole.log('story event handler running');
      const button = e.target;

      const parent = storyChoice.closest(STORY_PARENT);
      const storyData = getReactFiber(parent)?.return?.memoizedProps?.storyElement;
      newConsole.log(storyChoice);
      newConsole.log(button);
      newConsole.log(parent);
      newConsole.log(storyData);

      if (!markStorySubmission(storyData, button)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    },
  );
}

const observerStory = new MutationObserver(() => {
  const storyChoices = document.querySelectorAll(STORY_CHOICE);
  newConsole.log(storyChoices);
  if (storyChoices.length > 0) {
    newConsole.log('adding story listeners');
    storyChoices.forEach((x) => addStoryListener(x));
  }

  const tapTokens = document.querySelectorAll(STORY_TOKENS);
  if (tapTokens.length > 0) {
    tapTokens.forEach((x) => addStoryListener(x));
  }

  const matchButtons = document.querySelectorAll(MATCH_BUTTONS);
  if (matchButtons.length > 0) {
    matchButtons.forEach((button) => addStoryListener(button));
  }
});

observerStory.observe(document.body, { childList: true, subtree: true });
