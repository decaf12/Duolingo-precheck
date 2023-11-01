import { n as newConsole, g as getReactFiber } from './getReactFiber-56206b7a.js';

const STORY_PARENT = '[class="_35e5D"]';
const STORY_CHECKBOX = '[class="_1eDrh _2Qk72"]';
const STORY_CHOICE = '[class="_3p1ox"]';

const STORY_TOKENS = '[class="_1deIS"]';
const STORY_TOKEN_SELECTED = '[class="LhRk3 WOZnx _275sd _1ZefG notranslate _6Nozy _1O290 _2HRY_"]';
const STORY_TOKEN_BANK = '[data-test="stories-element"]';

const MATCH_BUTTONS = '[class="_3Y3Px"]';
const MATCH_BUTTON_SELECTED = '[class="WOZnx _275sd _1ZefG notranslate _6Nozy _1O290 _2HRY_ pmjld edf-m"]';
const MATCH_BUTTON_TEXT = '[data-test="challenge-tap-token-text"]';
const MATCH_BUTTON_NUMBER_UNSELECTED = '[class="Z7UoT _2S0Zh _2TrnF"]';
const MATCH_BUTTON_NUMBER_SELECTED = '[class="_2R_o5 _2S0Zh _2TrnF"]';
const MATCH_BUTTON_NUMBER_GREYED = '[class="_1KBJW _2S0Zh _2TrnF"]';

const POINT_TO_PHRASE_BUTTON_BANK = '[class="_3jGFa _1RoWn"]';
const POINT_TO_PHRASE_BUTTON = '[data-test="challenge-tap-token-text"]';

/* eslint-disable max-len */

function storyMatchKeyboard(storyData, button) {
  const previouslyClicked = document.querySelector(MATCH_BUTTON_SELECTED);
  if (!previouslyClicked) {
    return true;
  }
  const previousText = previouslyClicked.querySelector(MATCH_BUTTON_TEXT).textContent;
  const currentText = button.querySelector(MATCH_BUTTON_TEXT).textContent;
  return previousText === currentText
    ? true
    : Object.values(storyData.matches).some((pair) => (previousText === pair.phrase && currentText === pair.translation)
      || (currentText === pair.phrase && previousText === pair.translation));
}

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
      return storyMatchKeyboard(storyData, button);
    }

    case 'MULTIPLE_CHOICE': {
      const answerArray = storyData.answers;
      const correctID = storyData.correctAnswerIndex;
      const buttonText = button.nextElementSibling.textContent;
      const correctText = answerArray[correctID].text;
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

      if (storyData && !storyMatchKeyboard(storyData, button)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }
  },
);

const observerStory = new MutationObserver(() => {
  const checkboxes = document.querySelectorAll(STORY_CHECKBOX);
  if (checkboxes.length > 0) {
    newConsole.log('Adding checkboxes');
    newConsole.log(checkboxes);
    checkboxes.forEach((button) => addStoryListener(button));
  }

  const storyChoices = document.querySelectorAll(STORY_CHOICE);
  if (storyChoices.length > 0) {
    storyChoices.forEach((button) => addStoryListener(button));
  }

  const tapTokens = document.querySelectorAll(STORY_TOKENS);
  if (tapTokens.length > 0) {
    tapTokens.forEach((button) => addStoryListener(button));
  }

  const matchButtons = document.querySelectorAll(MATCH_BUTTONS);
  if (matchButtons.length > 0) {
    matchButtons.forEach((button) => addStoryListener(button));
  }
});

observerStory.observe(document.body, { childList: true, subtree: true });
