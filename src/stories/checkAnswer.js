/* eslint-disable max-len */
import * as constants from './challengeTypeConstants.js';
import newConsole from '../setUpConsole.js';

export function markStoryMatch(storyData, button) {
  newConsole.debug('markStoryMatch');
  const previouslyClicked = document.querySelector(constants.MATCH_BUTTON_SELECTED);
  newConsole.debug('previouslyClicked', previouslyClicked);
  if (!previouslyClicked) {
    return true;
  }
  const previousText = previouslyClicked.querySelector(constants.MATCH_BUTTON_TEXT).textContent;
  newConsole.debug('previousText', previousText);

  const currentText = button.querySelector(constants.MATCH_BUTTON_TEXT).textContent;
  newConsole.debug('currentText', currentText);

  return previousText === currentText
    ? true
    : Object.values(storyData.matches).some((pair) => (previousText === pair.phrase && currentText === pair.translation)
      || (currentText === pair.phrase && previousText === pair.translation));
}

export function markStorySubmission(storyData, button) {
  newConsole.debug('markStorySubmission');
  switch (storyData.type) {
    case 'ARRANGE': {
      newConsole.debug('marking arrange');
      newConsole.debug('button', button);

      const tokenBank = button.closest(constants.STORY_TOKEN_BANK);
      newConsole.debug('tokenBank', tokenBank);

      const selectedButtonCount = tokenBank.querySelectorAll(constants.STORY_TOKEN_SELECTED).length;
      newConsole.debug('selectedButtonCount', selectedButtonCount);

      const phraseArray = storyData.selectablePhrases;
      newConsole.debug('phraseArray', phraseArray);

      const correctOrder = storyData.phraseOrder;
      newConsole.debug('correctOrder', correctOrder);

      const correctButtonContent = phraseArray[correctOrder[selectedButtonCount]];
      newConsole.debug('correctButtonContent', correctButtonContent);
      newConsole.debug('button content', button.textContent);
      return button.textContent === correctButtonContent;
    }

    case 'MATCH': {
      return markStoryMatch(storyData, button);
    }

    case 'MULTIPLE_CHOICE': {
      newConsole.debug('multiple choice button:', button);

      const answerArray = storyData.answers;
      newConsole.debug('answerArray', answerArray);

      const correctID = storyData.correctAnswerIndex;
      newConsole.debug('correctId', correctID);

      const label = button.nextSibling;
      newConsole.debug('label', label);

      const labelTokens = Array.from(label.getElementsByTagName('span'));
      newConsole.debug('labelTokens', labelTokens);


      const buttonText = labelTokens.map((token) => token.innerText).join('');
      newConsole.debug('buttonText', buttonText);

      const correctText = answerArray[correctID].text;
      newConsole.debug('correctText', correctText);
      return correctText === buttonText;
    }

    case 'POINT_TO_PHRASE': {
      newConsole.debug('Point to phrase');
      const buttonBank = button.closest(constants.POINT_TO_PHRASE_BUTTON_BANK);
      newConsole.debug('buttonBank', buttonBank);
      const buttons = Array.from(buttonBank.querySelectorAll('button'));
      newConsole.debug('buttons', buttons);
      const correctIndex = storyData.correctAnswerIndex;
      newConsole.debug('correctIndex', correctIndex);
      const correctButton = buttons[correctIndex];
      newConsole.debug('correctButton', correctButton);
      newConsole.debug('button', button);
      newConsole.debug('button innertext', button.innerText);
      return button.innerText === correctButton.innerText;
    }

    case 'SELECT_PHRASE': {
      newConsole.debug('select phrase');
      const answerArray = storyData.answers;
      newConsole.debug('answerArray', answerArray);
      const correctID = storyData.correctAnswerIndex;
      newConsole.debug('correctID', correctID);
      const correctText = answerArray[correctID];
      newConsole.debug('correctText', correctText);
      const buttonText = button.innerText;
      newConsole.debug('buttonText', buttonText);
      return correctText === buttonText;
    }

    default:
      return false;
  }
}
