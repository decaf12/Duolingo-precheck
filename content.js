function makeSubmission() {
  const TRANSLATE = '[data-test="challenge challenge-translate"]';
  const TRANSLATE_PROMPT = '[data-test="hint-token"]';
  const ANSWER_FILTER_TEXTBOX = '[data-test="challenge-translate-input"]';

  const FORM = '[data-test="challenge challenge-form"]';
  const FORM_PROMPT = '[class="_2SfAl _2Hg6H"]';
  const FORM_CHOICES = '[data-test="challenge-choice"]';

  if (Array.from(document.querySelectorAll(TRANSLATE)).length > 0) {
    const promptCollection = Array.from(document.querySelectorAll(TRANSLATE_PROMPT));
    const prompt = promptCollection.map((x) => x.innerHTML).join('');
    const answer = document.querySelectorAll(ANSWER_FILTER_TEXTBOX)[0].value;
    const challengeType = 'translate';
    return [prompt, answer, challengeType];
  }

  if (Array.from(document.querySelectorAll(FORM)).length > 0) {
    // eslint-disable-next-line no-unused-vars
    const [prompt, ...rest] = Array.from(document.querySelectorAll(FORM_PROMPT));
    const choices = Array.from(document.querySelectorAll(FORM_CHOICES));
    let choiceID = -1;
    // eslint-disable-next-line no-restricted-syntax
    for (const [ID, choice] of choices.entries()) {
      if (choice.tabIndex === 0) {
        choiceID = ID;
        break;
      }
    }
    const challengeType = 'form';
    return [prompt.dataset.prompt, choiceID, challengeType];
  }
}

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
