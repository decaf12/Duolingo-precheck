import { getChallengeState } from './get-challenge-data.js';
import * as check from '../check-answer.js';

export const checkSubmission = (submissionButton) => {
  if (submissionButton?.textContent !== 'Check') {
    return true;
  }

  return check.markSubmission(getChallengeState());
};

export default checkSubmission;
