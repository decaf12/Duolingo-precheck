import makeSubmission from './makeSubmission';

const script = document.createElement('script');
script.setAttribute('type', 'module');
script.setAttribute('src', browser.runtime.getURL('makeSubmission.js'));
const head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
head.insertBefore(script, head.lastChild);

document.addEventListener(
  'keydown',
  async (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
      e.preventDefault();
      e.stopImmediatePropagation();

      const [prompt, answer, challengeType] = makeSubmission();
      const marking = await browser.runtime.sendMessage({
        prompt,
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
