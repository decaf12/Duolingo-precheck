import * as constants from '../challenge-type-constants';
import getReactFiber from '../../get-react-fiber';

export const getChallengeDataLesson = () => {
  const solution = document.querySelector(constants.CHALLENGE_AREA);

  if (!solution) {
    return null;
  }

  const fiber = getReactFiber(solution);
  return fiber?.return?.memoizedProps?.challenge;
};

export default getChallengeDataLesson;