/* eslint-disable max-len */
import * as constants from './challengeTypeConstants.js';
import newConsole from '../setUpConsole.js';

export function markStoryMatch(storyData, button) {
  newConsole.log('markStoryMatch');
  const previouslyClicked = document.querySelector(constants.MATCH_BUTTON_SELECTED);
  newConsole.log(previouslyClicked);
  if (!previouslyClicked) {
    return true;
  }
  const previousText = previouslyClicked.querySelector(constants.MATCH_BUTTON_TEXT).textContent;
  newConsole.log(previousText);

  const currentText = button.querySelector(constants.MATCH_BUTTON_TEXT).textContent;
  newConsole.log(currentText);

  return previousText === currentText
    ? true
    : Object.values(storyData.matches).some((pair) => (previousText === pair.phrase && currentText === pair.translation)
      || (currentText === pair.phrase && previousText === pair.translation));
}

export function markStorySubmission(storyData, button) {
  newConsole.log('markStorySubmission');
  switch (storyData.type) {
    case 'ARRANGE': {
      newConsole.log('marking arrange');

      const tokenBank = button.closest(constants.STORY_TOKEN_BANK);
      newConsole.log(tokenBank);

      const selectedButtonCount = tokenBank.querySelectorAll(constants.STORY_TOKEN_SELECTED).length;
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
