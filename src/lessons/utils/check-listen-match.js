import * as constants from '../challenge-type-constants';

export const checkListenMatch = (button) => {
  const previouslyClicked = button.parentNode.querySelector(constants.MATCH_BUTTON_SELECTED);
  if (!previouslyClicked) {
    return true;
  }

  const currClicked = button.querySelector('button');

  const prevIsSound = previouslyClicked.querySelector(constants.LISTENMATCH_SOUNDWAVE) !== null;
  const currIsSound = currClicked.querySelector(constants.LISTENMATCH_SOUNDWAVE) !== null;
  if (prevIsSound === currIsSound) {
    return true;
  }

  const previousText = previouslyClicked.getAttribute('data-test');
  const currentText = currClicked.getAttribute('data-test');
  return previousText === currentText;
};

export default checkListenMatch;
