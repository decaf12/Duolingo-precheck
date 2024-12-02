/* eslint-disable max-len */
import * as constants from './challenge-type-constants.js';

export const markStoryMatch = (storyData, button) => {
  const previousText = document.querySelector(constants.MATCH_PREVIOUSLY_CLICKED_TEXT)?.textContent;
  if (previousText === undefined) {
    return true;
  }

  const currentText = button.querySelector(constants.MATCH_BUTTON_TEXT).textContent;

  return previousText === currentText
    ? true
    : Object.values(storyData.matches).some((pair) => (previousText === pair.phrase && currentText === pair.translation)
      || (currentText === pair.phrase && previousText === pair.translation));
};

export const markStorySubmission = (storyData, button) => {
  switch (storyData.type) {
    case 'ARRANGE': {
      const tokenBank = button.closest(constants.STORY_TOKEN_BANK);
      const selectedButtonCount = tokenBank.querySelectorAll(constants.STORY_TOKEN_SELECTED).length;
      const phraseArray = storyData.selectablePhrases;
      const correctOrder = storyData.phraseOrder;
      const correctButtonContent = phraseArray[correctOrder[selectedButtonCount]];
      return button.textContent.trim() === correctButtonContent.trim();
    }

    case 'MATCH': {
      return markStoryMatch(storyData, button);
    }

    case 'MULTIPLE_CHOICE': {
      const answerArray = storyData.answers;
      const correctID = storyData.correctAnswerIndex;
      const label = button.nextSibling;
      const labelTokens = Array.from(label.getElementsByTagName('span'));
      const buttonText = labelTokens.map((token) => token.innerText).join('');
      const correctText = answerArray[correctID].text;
      return correctText.trim() === buttonText.trim();
    }

    case 'POINT_TO_PHRASE': {
      const buttonBank = button.closest(constants.POINT_TO_PHRASE_BUTTON_BANK);
      const buttons = Array.from(buttonBank.querySelectorAll('button'));
      const correctIndex = storyData.correctAnswerIndex;
      const correctButton = buttons[correctIndex];
      return button.innerText.trim() === correctButton.innerText.trim();
    }

    case 'SELECT_PHRASE': {
      const answerArray = storyData.answers;
      const correctID = storyData.correctAnswerIndex;
      const correctText = answerArray[correctID];
      const buttonText = button.innerText;
      return correctText.trim() === buttonText.trim();
    }

    default:
      return false;
  }
};
