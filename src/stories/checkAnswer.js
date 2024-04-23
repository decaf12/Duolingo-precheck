/* eslint-disable max-len */
import * as constants from './challengeTypeConstants.js';
import newConsole from '../setUpConsole.js';

export function markStoryMatch(storyData, button) {
  newConsole.log('markStoryMatch');
  const previouslyClicked = document.querySelector(constants.MATCH_BUTTON_SELECTED);
  newConsole.log('previouslyClicked', previouslyClicked);
  if (!previouslyClicked) {
    return true;
  }
  const previousText = previouslyClicked.querySelector(constants.MATCH_BUTTON_TEXT).textContent;
  newConsole.log('previousText', previousText);

  const currentText = button.querySelector(constants.MATCH_BUTTON_TEXT).textContent;
  newConsole.log('currentText', currentText);

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
      newConsole.log('tokenBank', tokenBank);

      const selectedButtonCount = tokenBank.querySelectorAll(constants.STORY_TOKEN_SELECTED).length;
      newConsole.log('selectedButtonCount', selectedButtonCount);

      const phraseArray = storyData.selectablePhrases;
      newConsole.log('phraseArray', phraseArray);

      const correctOrder = storyData.phraseOrder;
      newConsole.log('correctOrder', correctOrder);

      const correctButtonContent = phraseArray[correctOrder[selectedButtonCount]];
      newConsole.log('correctButtonContent', correctButtonContent);
      return button.textContent === correctButtonContent;
    }

    case 'MATCH': {
      return markStoryMatch(storyData, button);
    }

    case 'MULTIPLE_CHOICE': {
      newConsole.log('multiple choice button:', button);

      const answerArray = storyData.answers;
      newConsole.log('answerArray', answerArray);

      const correctID = storyData.correctAnswerIndex;
      newConsole.log('correctId', correctID);

      const label = button.nextSibling;
      newConsole.log('label', label);

      const labelTokens = Array.from(label.getElementsByTagName('span'));
      newConsole.log('labelTokens', labelTokens);


      const buttonText = labelTokens.map((token) => token.innerText).join('');
      newConsole.log('buttonText', buttonText);

      const correctText = answerArray[correctID].text;
      newConsole.log('correctText', correctText);
      return correctText === buttonText;
    }

    case 'POINT_TO_PHRASE': {
      newConsole.log('Point to phrase');
      const buttonBank = button.closest(constants.POINT_TO_PHRASE_BUTTON_BANK);
      newConsole.log('buttonBank', buttonBank);
      const buttons = Array.from(buttonBank.querySelectorAll('button'));
      newConsole.log('buttons', buttons);
      const correctIndex = storyData.correctAnswerIndex;
      newConsole.log('correctIndex', correctIndex);
      const correctButton = buttons[correctIndex];
      newConsole.log('correctButton', correctButton);
      return button.innerText === correctButton.innerText;
    }

    case 'SELECT_PHRASE': {
      newConsole.log('select phrase');
      const answerArray = storyData.answers;
      newConsole.log('answerArray', answerArray);
      const correctID = storyData.correctAnswerIndex;
      newConsole.log('correctID', correctID);
      const correctText = answerArray[correctID];
      newConsole.log('correctText', correctText);
      const buttonText = button.innerText;
      newConsole.log('buttonText', buttonText);
      return correctText === buttonText;
    }

    default:
      return false;
  }
}
