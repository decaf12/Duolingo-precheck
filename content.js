const TYPE_TRANSLATE = 'translate';
const TYPE_FORM = 'form';

const TRANSLATE = '[data-test="challenge challenge-translate"]';
const TRANSLATE_PROMPT = '[data-test="hint-token"]';
const ANSWER_FILTER_TEXTBOX = '[data-test="challenge-translate-input"]';

const FORM = '[data-test="challenge challenge-form"]';
const FORM_PROMPT = '[class="_2SfAl _2Hg6H"]';
const FORM_CHOICES = '[data-test="challenge-choice"]';

function makeSubmission() {
  if (document.querySelector(TRANSLATE)) {
    const promptCollection = Array.from(document.querySelectorAll(TRANSLATE_PROMPT));
    const prompt = promptCollection.map((x) => x.innerHTML).join('');
    const answer = document.querySelector(ANSWER_FILTER_TEXTBOX).value;
    return [prompt, answer, TYPE_TRANSLATE];
  }

  if (document.querySelectorAll(FORM)) {
    const prompt = document.querySelector(FORM_PROMPT);
    const choices = Array.from(document.querySelectorAll(FORM_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [prompt.dataset.prompt, choiceID, TYPE_FORM];
  }

  return 0;
}

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
