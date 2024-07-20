import * as constants from './challenge-type-constants.js';
import { checkMatch } from './utils/check-match.js';
import { getChallengeDataLesson } from './utils/get-challenge-data.js';
import { checkListenMatch } from './utils/check-listen-match.js';

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
