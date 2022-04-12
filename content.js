const SUBMISSION_BUTTON = '[data-test="player-next"]';
const SUBMISSION_BUTTON_SPAN = '[class="_13HXc"]';

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

const TYPE_TRANSLATE = 'translate';
const TRANSLATE = '[data-test="challenge challenge-translate"]';
const TRANSLATE_PROMPT = '[data-test="hint-token"]';
const TRANSLATE_TEXTBOX = '[data-test="challenge-translate-input"]';
const MATCH_BUTTONS = '[data-test="challenge-tap-token"]';
const MATCH_BUTTON_SELECTED = '[class="_1rl91 WOZnx _275sd _1ZefG notranslate _6Nozy _1O290 _2HRY_ pmjld edf-m"]';

function makeSubmission() {
  if (document.querySelector(TRANSLATE)) {
    const promptCollection = Array.from(document.querySelectorAll(TRANSLATE_PROMPT));
    const challengePrompt = promptCollection.map((x) => x.textContent).join('');
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
    const challengePrompt = document.querySelector(JUDGE_PROMPT).textContent;
    const choices = Array.from(document.querySelectorAll(JUDGE_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, TYPE_JUDGE];
  }

  if (document.querySelector(SELECT)) {
    const challengePrompt = document.querySelector(SELECT_PROMPT).textContent;
    const choices = Array.from(document.querySelectorAll(SELECT_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, TYPE_SELECT];
  }
  return 0;
}

function addSubmissionListener(button) {
  button.addEventListener('click', (e) => {
    const clickedButton = document.querySelector(MATCH_BUTTON_SELECTED);
    if (!clickedButton) {
      return;
    }
    const buttonText1 = clickedButton.innerHTML.split('</span>')[1];
    const buttonText2 = button.innerHTML.split('</span>')[1];
    console.log(`Clicked: ${buttonText1}, clicked 2: ${buttonText2}`);
  });
}

document.addEventListener(
  'keydown',
  async (e) => {
    if (e.key === 'Enter') {
      const submissionButton = document.querySelector(SUBMISSION_BUTTON);
      const submissionButtonSpan = submissionButton.querySelector(SUBMISSION_BUTTON_SPAN);
      if (submissionButtonSpan.innerHTML !== 'Check') {
        submissionButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
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

const observer = new MutationObserver(() => {
  console.log('Mutation detected');
  if (document.querySelector(MATCH_BUTTONS)) {
    const matchButtons = document.querySelectorAll(MATCH_BUTTONS);
    matchButtons.forEach(addSubmissionListener);
  }
});

observer.observe(document.body, { childList: true, subtree: true });
