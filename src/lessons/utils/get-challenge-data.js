import * as constants from '../challengeTypeConstants';
import getReactFiber from '../../getReactFiber';

export const getChallengeDataLesson = () => {
  const solution = document.querySelector(constants.CHALLENGE_AREA);

  if (!solution) {
    return null;
  }

  const fiber = getReactFiber(solution);
  return fiber?.return?.memoizedProps?.challenge;
};
