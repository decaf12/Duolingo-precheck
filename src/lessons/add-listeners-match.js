import * as constants from './challenge-type-constants';
import { checkMatch } from './utils/check-match';
import { getChallengeDataLesson } from './utils/get-challenge-data';
import { checkListenMatch } from './utils/check-listen-match';

const observerMatch = new MutationObserver(() => {
  const challengeData = getChallengeDataLesson();
  const challengeType = challengeData?.type;
  if (challengeType !== 'match' && challengeType !== 'listenMatch') {
    return;
  }

  const checker = challengeType === 'match' ? checkMatch : checkListenMatch;
  const matchButtons = document.querySelectorAll(constants.MATCH_BUTTONS);
  matchButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (!checker(challengeData, button)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    });
  });
});

observerMatch.observe(document.body, { childList: true, subtree: true });
