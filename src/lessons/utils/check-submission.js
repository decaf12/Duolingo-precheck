import * as constants from '../challenge-type-constants.js';
import { getChallengeState } from './get-challenge-data.js';
import newConsole from '../../set-up-console.js';
import * as check from '../check-answer.js';

export const checkSubmission = (submissionButton) => {
  if (submissionButton?.textContent !== 'Check') {
    return true;
  }

  const challengeData = getChallengeState()?.challenge;
  newConsole.log('challengeData', challengeData);
  return check.markSubmission(challengeData);
};

export default checkSubmission;
