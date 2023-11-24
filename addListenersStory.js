import { n as newConsole, g as getReactFiber } from './getReactFiber-56206b7a.js';

const STORY_PARENT = '[class="_35e5D"]';
const STORY_CHECKBOX = '._1eDrh, ._1ZeuM';
const STORY_CHOICE = '[class="_3p1ox"]';

const STORY_TOKENS = '[class="_1deIS"]';
const STORY_TOKEN_SELECTED = '[class="_33Jbm _1N-oo _36Vd3 _16r-S notranslate _6Nozy _1O290 _2HRY_"]';
const STORY_TOKEN_BANK = '[data-test="word-bank"]';

const MATCH_BUTTONS = '[class="_3Y3Px"]';
const MATCH_BUTTON_SELECTED = '[class="_1N-oo _36Vd3 _16r-S notranslate _6Nozy _1O290 _2HRY_ pmjld edf-m"]';
const MATCH_BUTTON_TEXT = '[data-test="challenge-tap-token-text"]';
const MATCH_BUTTON_NUMBER_UNSELECTED = '[class="Z7UoT _2S0Zh _2TrnF"]';
const MATCH_BUTTON_NUMBER_SELECTED = '[class="_2R_o5 _2S0Zh _2TrnF"]';
const MATCH_BUTTON_NUMBER_GREYED = '[class="_1KBJW _2S0Zh _2TrnF"]';

const POINT_TO_PHRASE_BUTTON_BANK = '[class="_3jGFa _1RoWn"]';
const POINT_TO_PHRASE_BUTTON = '[data-test="challenge-tap-token-text"]';

/* eslint-disable max-len */

function markStoryMatch(storyData, button) {
  newConsole.log('markStoryMatch');
  const previouslyClicked = document.querySelector(MATCH_BUTTON_SELECTED);
  newConsole.log(previouslyClicked);
  if (!previouslyClicked) {
    return true;
  }
  const previousText = previouslyClicked.querySelector(MATCH_BUTTON_TEXT).textContent;
  newConsole.log(previousText);

  const currentText = button.querySelector(MATCH_BUTTON_TEXT).textContent;
  newConsole.log(currentText);

  return previousText === currentText
    ? true
    : Object.values(storyData.matches).some((pair) => (previousText === pair.phrase && currentText === pair.translation)
      || (currentText === pair.phrase && previousText === pair.translation));
}

function markStorySubmission(storyData, button) {
  newConsole.log('markStorySubmission');
  switch (storyData.type) {
    case 'ARRANGE': {
      newConsole.log('marking arrange');

      const tokenBank = button.closest(STORY_TOKEN_BANK);
      newConsole.log(tokenBank);

      const selectedButtonCount = tokenBank.querySelectorAll(STORY_TOKEN_SELECTED).length;
      newConsole.log(selectedButtonCount);

      const phraseArray = storyData.selectablePhrases;
      newConsole.log(phraseArray);

      const correctOrder = storyData.phraseOrder;
      newConsole.log(correctOrder);

      const correctButtonContent = phraseArray[correctOrder[selectedButtonCount]];
      newConsole.log(correctButtonContent);
      return button.textContent === correctButtonContent;
    }

    case 'MATCH': {
      return markStoryMatch(storyData, button);
    }

    case 'MULTIPLE_CHOICE': {
      newConsole.log('markStorySubmission button:');

      newConsole.log(button);

      const answerArray = storyData.answers;
      newConsole.log(answerArray);

      const correctID = storyData.correctAnswerIndex;
      newConsole.log(correctID);

      const buttonText = button.textContent;
      newConsole.log(buttonText);

      const correctText = answerArray[correctID].text;
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
      newConsole.log('addStoryListener');
      newConsole.log(storyChoice);
      const parent = storyChoice.closest(STORY_PARENT);
      newConsole.log(parent);
      if (!parent) {
        return;
      }

      const storyData = getReactFiber(parent)?.return?.memoizedProps?.storyElement;
      newConsole.log(storyData);

      if (storyData && !markStorySubmission(storyData, storyChoice)) {
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
      const buttons = Array.from(document.querySelectorAll(MATCH_BUTTONS));
      if (!buttons.length) {
        return;
      }

      const button = buttons.find((x) => {
        newConsole.log(x);
        const number = x.querySelector(MATCH_BUTTON_NUMBER_SELECTED)
        ?? x.querySelector(MATCH_BUTTON_NUMBER_UNSELECTED)
        ?? x.querySelector(MATCH_BUTTON_NUMBER_GREYED);
        return number?.innerText === e.key;
      });

      if (!button) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }

      const parent = button.closest(STORY_PARENT);
      const storyData = getReactFiber(parent)?.return?.memoizedProps?.storyElement;

      if (storyData && !markStoryMatch(storyData, button)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }
  },
);

const observerStory = new MutationObserver(() => {
  const checkboxes = document.querySelectorAll(STORY_CHECKBOX);
  if (checkboxes.length > 0) {
    newConsole.log('Story checkboxes found.');
    newConsole.log(checkboxes);
    checkboxes.forEach((button) => addStoryListener(button));
  }

  const storyChoices = document.querySelectorAll(STORY_CHOICE);
  if (storyChoices.length > 0) {
    newConsole.log('Story story choices found.');
    storyChoices.forEach((button) => addStoryListener(button));
  }

  const tapTokens = document.querySelectorAll(STORY_TOKENS);
  if (tapTokens.length > 0) {
    newConsole.log('Story tap tokens found.');
    tapTokens.forEach((button) => addStoryListener(button));
  }

  const matchButtons = document.querySelectorAll(MATCH_BUTTONS);
  if (matchButtons.length > 0) {
    newConsole.log('Story match buttons found.');
    matchButtons.forEach((button) => addStoryListener(button));
  }
});

observerStory.observe(document.body, { childList: true, subtree: true });
