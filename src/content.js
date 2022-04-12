import * as submission from './makeSubmission';
import * as constants from './challengeTypeConstants';

document.addEventListener(
  'keydown',
  async (e) => {
    if (e.key === 'Enter') {
      const submissionButton = document.querySelector(constants.SUBMISSION_BUTTON);
      const submissionButtonSpan = submissionButton.querySelector(constants.SUBMISSION_BUTTON_SPAN);
      if (submissionButtonSpan.innerHTML !== 'Check') {
        submissionButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        return;
      }

      e.preventDefault();
      e.stopImmediatePropagation();

      const [challengePrompt, answer, challengeType] = submission.makeSubmission();
      const marking = await browser.runtime.sendMessage({
        challengePrompt,
        answer,
        challengeType,
      });

      if (marking.correct) {
        submissionButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      }
    }
  },
);

const observer = new MutationObserver(() => {
  console.log('Mutation detected');
  if (document.querySelector(constants.MATCH_BUTTONS)) {
    const matchButtons = document.querySelectorAll(constants.MATCH_BUTTONS);
    matchButtons.forEach(submission.addSubmissionListener);
  }
});

observer.observe(document.body, { childList: true, subtree: true });
