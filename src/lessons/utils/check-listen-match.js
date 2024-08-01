import getFiberNode from '../../get-fiber-node.js';
import * as constants from '../challenge-type-constants.js';

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

  const previousFiberNode = getFiberNode(previouslyClicked);
  const currFiberNode = getFiberNode(currClicked);
  const previousText = previousFiberNode.memoizedProps['data-test'];
  const currentText = currFiberNode.memoizedProps['data-test'];
  return previousText === currentText;
};

export default checkListenMatch;
