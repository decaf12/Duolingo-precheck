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

const TYPE_MATCH = 'match';
const MATCH = '[data-test="challenge challenge-match"]';
const MATCH_BUTTONS = '[data-test="challenge-tap-token"]';
const MATCH_BUTTON_SELECTED = '[class="_1rl91 WOZnx _275sd _1ZefG notranslate _6Nozy _1O290 _2HRY_ pmjld edf-m"]';

function makeSubmission(extraInfo = null) {
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

  if (document.querySelector(TRANSLATE)) {
    const promptCollection = Array.from(document.querySelectorAll(TRANSLATE_PROMPT));
    const challengePrompt = promptCollection.map((x) => x.textContent).join('');
    const answer = document.querySelector(TRANSLATE_TEXTBOX).value;
    return [challengePrompt, answer, TYPE_TRANSLATE];
  }

  if (document.querySelector(SELECT)) {
    const challengePrompt = document.querySelector(SELECT_PROMPT).textContent;
    const choices = Array.from(document.querySelectorAll(SELECT_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, TYPE_SELECT];
  }

  if (document.querySelector(MATCH)) {
    const buttonList = Array.from(document.querySelectorAll(MATCH_BUTTONS));
    const buttonCount = buttonList.length;
    const learningTokenButtons = buttonList.slice(buttonCount / 2);
    const challengePrompt = learningTokenButtons.map((x) => x.innerHTML.split('</span>')[1]).sort().join('');
    const choices = extraInfo;
    return [challengePrompt, choices, TYPE_MATCH];
  }
  return 0;
}

document.addEventListener(
  'keydown',
  async (e) => {
    if (e.key === 'Enter') {
      const submissionButton = document.querySelector(SUBMISSION_BUTTON);
      const submissionButtonSpan = submissionButton.querySelector(SUBMISSION_BUTTON_SPAN);
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
    const previouslyClicked = document.querySelector(MATCH_BUTTON_SELECTED);
    if (!previouslyClicked) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();

    const previousText = previouslyClicked.innerHTML.split('</span>')[1];
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
  if (document.querySelector(MATCH_BUTTONS)) {
    const matchButtons = document.querySelectorAll(MATCH_BUTTONS);
    matchButtons.forEach(addSubmissionListener);
  }
});

observer.observe(document.body, { childList: true, subtree: true });
