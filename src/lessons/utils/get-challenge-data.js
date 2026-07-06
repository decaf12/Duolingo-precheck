import * as constants from '../challenge-type-constants.js';
import getFiberNode from '../../get-fiber-node.js';

export const getChallengeState = () => {
  const solution = document.getElementById(constants.CHALLENGE_FOOTER_ID).parentElement;
  
  if (!solution) {
    return null;
  }

  const fiber = getFiberNode(solution);
  return fiber?.memoizedProps?.children?.props;
};

export default getChallengeState;
