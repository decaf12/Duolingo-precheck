import * as constants from '../challenge-type-constants';
import getFiberNode from '../../get-fiber-node';

export const getChallengeDataLesson = () => {
  const solution = document.querySelector(constants.CHALLENGE_AREA);

  if (!solution) {
    return null;
  }

  const fiber = getFiberNode(solution);
  return fiber?.return?.memoizedProps?.challenge;
};

export default getChallengeDataLesson;
