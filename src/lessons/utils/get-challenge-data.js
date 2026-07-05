import * as constants from '../challenge-type-constants.js';
import getFiberNode from '../../get-fiber-node.js';

export const getChallengeState = () => {
  const solution = document.querySelector(constants.CHALLENGE_AREA);

  if (!solution) {
    return null;
  }

  const fiber = getFiberNode(solution);
  return fiber?.return?.memoizedProps;
};

export default getChallengeState;
