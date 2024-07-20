/* eslint-disable max-len */
import * as constants from './challenge-type-constants.js';
import { getChallengeDataLesson } from './utils/get-challenge-data.js';
import { checkSubmission } from './utils/check-submission.js';
import { checkMatch } from './utils/check-match.js';
import { checkListenMatch } from './utils/check-listen-match.js';
import { getButton } from './utils/get-button.js';

document.addEventListener(
  'keydown',
  (e) => {
    if (e.key === 'Enter') {
      const submissionButton = document.querySelector(constants.SUBMISSION_BUTTON_LESSON);

      if (submissionButton && !checkSubmission(submissionButton)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    } else if (/^\d$/.test(e.key)) {
      const challengeData = getChallengeDataLesson();
      if (challengeData.type !== 'match' && challengeData.type !== 'listenMatch') {
        return;
      }

      const button = getButton(e.key);
      const isCorrect = challengeData.type === 'match' ? checkMatch(challengeData, button) : checkListenMatch(button);
      if (!isCorrect) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }
  },
);
