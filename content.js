const TYPE_TRANSLATE = 'translate';
const TYPE_FORM = 'form';
const TYPE_JUDGE = 'judge';

const TRANSLATE = '[data-test="challenge challenge-translate"]';
const TRANSLATE_PROMPT = '[data-test="hint-token"]';
const TRANSLATE_TEXTBOX = '[data-test="challenge-translate-input"]';

const FORM = '[data-test="challenge challenge-form"]';
const FORM_PROMPT = '[class="_2SfAl _2Hg6H"]';
const FORM_CHOICES = '[data-test="challenge-choice"]';

const JUDGE = '[data-test="challenge challenge-judge"]';
const JUDGE_PROMPT = '[class="_3-JBe"]';
const JUDGE_CHOICES = '[data-test="challenge-choice"]';

function makeSubmission() {
  if (document.querySelector(TRANSLATE)) {
    const promptCollection = Array.from(document.querySelectorAll(TRANSLATE_PROMPT));
    const prompt = promptCollection.map((x) => x.innerHTML).join('');
    const answer = document.querySelector(TRANSLATE_TEXTBOX).value;
    return [prompt, answer, TYPE_TRANSLATE];
  }

  if (document.querySelector(FORM)) {
    console.log('Form detected');
    const prompt = document.querySelector(FORM_PROMPT);
    const promptNoBlank = prompt.dataset.prompt.replace(/_/g, '');
    const choices = Array.from(document.querySelectorAll(FORM_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [promptNoBlank, choiceID, TYPE_FORM];
  }

  if (document.querySelector(JUDGE)) {
    console.log('Judge detected');
    const prompt = document.querySelector(JUDGE_PROMPT).innerHTML;
    const choices = Array.from(document.querySelectorAll(JUDGE_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [prompt, choiceID, TYPE_JUDGE];
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
