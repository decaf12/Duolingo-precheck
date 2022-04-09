const TYPE_TRANSLATE = 'translate';
const TRANSLATE = '[data-test="challenge challenge-translate"]';
const TRANSLATE_PROMPT = '[data-test="hint-token"]';
const TRANSLATE_TEXTBOX = '[data-test="challenge-translate-input"]';

const TYPE_FORM = 'form';
const FORM = '[data-test="challenge challenge-form"]';
const FORM_PROMPT = '[class="_2SfAl _2Hg6H"]';
const FORM_CHOICES = '[data-test="challenge-choice"]';

const TYPE_JUDGE = 'judge';
const JUDGE = '[data-test="challenge challenge-judge"]';
const JUDGE_PROMPT = '[class="_3-JBe"]';
const JUDGE_CHOICES = '[data-test="challenge-choice"]';

const TYPE_SELECT = 'select';
const SELECT = '[data-test="challenge challenge-select"]';
const SELECT_PROMPT = '[data-test="challenge-header"]';
const SELECT_CHOICES = '[data-test="challenge-choice"]';

function makeSubmission() {
  if (document.querySelector(TRANSLATE)) {
    const promptCollection = Array.from(document.querySelectorAll(TRANSLATE_PROMPT));
    const challengePrompt = promptCollection.map((x) => x.innerHTML).join('');
    const answer = document.querySelector(TRANSLATE_TEXTBOX).value;
    return [challengePrompt, answer, TYPE_TRANSLATE];
  }

  if (document.querySelector(FORM)) {
    const challengePrompt = document.querySelector(FORM_PROMPT);
    const promptNoBlank = challengePrompt.dataset.prompt.replace(/_/g, '');
    const choices = Array.from(document.querySelectorAll(FORM_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [promptNoBlank, choiceID, TYPE_FORM];
  }

  if (document.querySelector(JUDGE)) {
    const challengePrompt = document.querySelector(JUDGE_PROMPT).innerHTML;
    const choices = Array.from(document.querySelectorAll(JUDGE_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, TYPE_JUDGE];
  }

  if (document.querySelector(SELECT)) {
    const challengePrompt = document.querySelector(SELECT_PROMPT).innerHTML.replace(/[\u201C\u201D]/g, '"');
    const choices = Array.from(document.querySelectorAll(SELECT_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, TYPE_SELECT];
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
