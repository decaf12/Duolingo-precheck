import makeSubmission from './makeSubmission';
import * as constants from './challengeTypeConstants';

document.addEventListener(
  'keydown',
  async (e) => {
    if (e.key === 'Enter') {
      const submissionButton = document.querySelector(constants.SUBMISSION_BUTTON);
      const submissionButtonSpan = submissionButton.querySelector(constants.SUBMISSION_BUTTON_SPAN);
      if (submissionButtonSpan.innerHTML !== 'Check') {
        return;
      }

      e.preventDefault();
      e.stopImmediatePropagation();

      const [challengePrompt, answer, challengeType] = makeSubmission();
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

function addSubmissionListener(button) {
  button.addEventListener('click', async (e) => {
    const previouslyClicked = document.querySelector(constants.MATCH_BUTTON_SELECTED);
    if (!previouslyClicked) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();

    const previousText = previouslyClicked.querySelector(constants.MATCH_BUTTON_TEXT).textContent;
    const currentButton = button.textContent;
    const buttonNumber = currentButton.slice(0, 1);
    const currentText = currentButton.slice(1);

    const [challengePrompt, answer, challengeType] = makeSubmission({ previousText, currentText });
    const marking = await browser.runtime.sendMessage({
      challengePrompt,
      answer,
      challengeType,
    });

    if (marking.correct) {
      document.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: buttonNumber }));
    }
  });
}

const observer = new MutationObserver(() => {
  if (document.querySelector(constants.MATCH_BUTTONS)) {
    const matchButtons = document.querySelectorAll(constants.MATCH_BUTTONS);
    matchButtons.forEach(addSubmissionListener);
  }
});

observer.observe(document.body, { childList: true, subtree: true });
