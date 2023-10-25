/* eslint-disable max-len */
import * as constants from './challengeTypeConstants';
import newConsole from '../setUpConsole';

export default function markStorySubmission(storyData, button) {
  switch (storyData.type) {
    case 'ARRANGE': {
      const tokenBank = button.closest(constants.STORY_TOKEN_BANK);
      const selectedButtonCount = tokenBank.querySelectorAll(constants.STORY_TOKEN_SELECTED).length;
      const phraseArray = storyData.selectablePhrases;
      const correctOrder = storyData.phraseOrder;
      const correctButtonContent = phraseArray[correctOrder[selectedButtonCount]];
      return button.textContent === correctButtonContent;
    }

    case 'MATCH': {
      const previouslyClicked = document.querySelector(constants.MATCH_BUTTON_SELECTED);
      if (!previouslyClicked) {
        return true;
      }
      const previousText = previouslyClicked.querySelector(constants.MATCH_BUTTON_TEXT).textContent;
      const currentText = button.querySelector(constants.MATCH_BUTTON_TEXT).textContent;
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
      return correctText === buttonText;
    }

    case 'POINT_TO_PHRASE': {
      const buttonBank = button.closest(constants.POINT_TO_PHRASE_BUTTON_BANK);
      const buttons = Array.from(buttonBank.querySelectorAll(constants.POINT_TO_PHRASE_BUTTON));
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
