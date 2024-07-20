import * as constants from '../challenge-type-constants.js';
import * as check from '../check-answer.js';

export const checkMatch = (challengeData, button) => {
  if (!button) {
    return false;
  }

  const previouslyClicked = document.querySelector(constants.MATCH_BUTTON_SELECTED);
  if (!previouslyClicked) {
    return true;
  }

  const previousText = previouslyClicked.querySelector(constants.MATCH_BUTTON_TEXT).textContent;
  const currentButton = button.textContent;
  const currentText = currentButton.slice(1);
  return check.markMatch(challengeData, previousText, currentText);
};

export default checkMatch;
