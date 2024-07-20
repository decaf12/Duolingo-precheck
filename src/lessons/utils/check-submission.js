import * as constants from '../challenge-type-constants';
import { getChallengeDataLesson } from './get-challenge-data';
import newConsole from '../../set-up-console';
import * as check from '../check-answer';

export const checkSubmission = (submissionButton) => {
  if (submissionButton?.querySelector(constants.SUBMISSION_BUTTON_SPAN)?.innerHTML !== 'Check') {
    return true;
  }

  const challengeData = getChallengeDataLesson();
  newConsole.log('challengeData', challengeData);
  return check.markSubmission(challengeData);
};

export default checkSubmission;
