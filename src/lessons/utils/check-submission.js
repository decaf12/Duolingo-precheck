import * as constants from '../challenge-type-constants.js';
import { getChallengeDataLesson } from './get-challenge-data.js';
import newConsole from '../../set-up-console.js';
import * as check from '../check-answer.js';

export const checkSubmission = (submissionButton) => {
  if (submissionButton?.querySelector(constants.SUBMISSION_BUTTON_SPAN)?.innerHTML !== 'Check') {
    return true;
  }

  const challengeData = getChallengeDataLesson();
  newConsole.log('challengeData', challengeData);
  return check.markSubmission(challengeData);
};

export default checkSubmission;
