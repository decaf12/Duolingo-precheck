import * as submission from './makeSubmission';
import * as constants from './challengeTypeConstants';

document.addEventListener(
  'keydown',
  async (e) => {
    if (e.key === 'Enter') {
      const submissionButton = document.querySelector(constants.SUBMISSION_BUTTON);
      const submissionButtonText = submissionButton.querySelector(constants.SUBMISSION_BUTTON_TEXT);
      if (submissionButtonText.innerHTML !== 'Check') {
        submissionButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        return;
      }

      console.log(`Button: ${JSON.stringify(submissionButton)}`);
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
  console.log('buttons selected');
});

observer.observe(document.body, { childList: true, subtree: true });
