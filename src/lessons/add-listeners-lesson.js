/* eslint-disable max-len */
import * as constants from './challenge-type-constants';
import { getChallengeDataLesson } from './utils/get-challenge-data';
import { checkSubmission } from './utils/check-submission';
import { checkMatch } from './utils/check-match';
import { checkListenMatch } from './utils/check-listen-match';
import { getButton } from './utils/get-button';

document.addEventListener(
  'keydown',
  (e) => {
    if (e.key === 'Enter') {
      const submissionButton = document.querySelector(constants.SUBMISSION_BUTTON_LESSON);
      if (submissionButton === null) {
        return;
      }

      if (!checkSubmission(submissionButton)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    } else if (/^\d$/.test(e.key)) {
      const challengeData = getChallengeDataLesson();
      if (challengeData.type === 'match') {
        const button = getButton(e.key);
        if (!checkMatch(challengeData, button)) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      } else if (challengeData.type === 'listenMatch') {
        const button = getButton(e.key);
        if (!checkListenMatch(button)) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      }
    }
  },
);
