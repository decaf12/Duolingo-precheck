import * as submission from './makeSubmission';
import * as constants from './challengeTypeConstants';

document.addEventListener(
  'keydown',
  async (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
      e.preventDefault();
      e.stopImmediatePropagation();

      const [challengePrompt, answer, challengeType] = submission.makeSubmission();
      const marking = await browser.runtime.sendMessage({
        challengePrompt,
        answer,
        challengeType,
      });
      if (marking.correct) {
        const submit = new KeyboardEvent('keydown', { key: 'Enter' });
        document.dispatchEvent(submit);
      }
    }
  },
);

const observer = new MutationObserver(() => {
  console.log('buttons selected');
});

observer.observe(document.body, { childList: true, subtree: true });
