const SUBMISSION_BUTTON = '[data-test="player-next"]';
const SUBMISSION_BUTTON_SPAN = '[class="_13HXc"]';
const SKIP_CHECKING_TRUE = 'skip checking: true';
const SKIP_CHECKING_FALSE = 'skip checking: false';

const IGNORED_CHARACTERS = /[_'\-\s,.?!;]/g;

const TYPE_ASSIST = 'assist';
const ASSIST = '[data-test="challenge challenge-assist"]';
const ASSIST_PROMPT = '[data-test="challenge-header"]';
const ASSIST_CHOICES = '[data-test="challenge-choice"]';
const COMPLETEREVERSETRANSLATION = '[data-test="challenge challenge-completeReverseTranslation"]';
const COMPLETEREVERSETRANSLATION_PROMPT = '[data-test="hint-token"]';
const COMPLETEREVERSETRANSLATION_TEXTBOX = '[class="_3f_Q3 _2FKqf _2ti2i"]';
const COMPLETEREVERSETRANSLATION_BLANK = '[data-test="challenge-text-input"]';

const TYPE_DEFINITION = 'definition';
const DEFINITION = '[data-test="challenge challenge-definition"]';
const DEFINITION_PROMPT = '[class="_38Get _2Hg6H _1dBSx _3slGi"]';
const DEFINITION_CHOICES = '[data-test="challenge-choice"]';

const TYPE_DIALOGUE = 'dialogue';
const DIALOGUE = '[data-test="challenge challenge-dialogue"]';
const DIALOGUE_CHOICES = '[data-test="challenge-choice"]';
const DIALOGUE_CHOICE_TEXT = '[data-test="challenge-judge-text"]';

const TYPE_FORM = 'form';
const FORM = '[data-test="challenge challenge-form"]';
const FORM_PROMPT = '[class="_2SfAl _2Hg6H"]';
const FORM_CHOICES = '[data-test="challenge-choice"]';

const TYPE_GAPFILL = 'gapFill';
const GAPFILL = '[data-test="challenge challenge-gapFill"]';
const GAPFILL_PROMPT = '[class="_3Fi4A _2Hg6H"]';
const GAPFILL_CHOICES = '[data-test="challenge-choice"]';

const TYPE_JUDGE = 'judge';
const JUDGE = '[data-test="challenge challenge-judge"]';
const JUDGE_PROMPT = '[class="_3-JBe"]';
const JUDGE_CHOICES = '[data-test="challenge-choice"]';

const TYPE_MATCH = 'match';
const MATCH = '[data-test="challenge challenge-match"]';
const MATCH_BUTTONS = '[class="_35eLX"]';
const MATCH_BUTTON_TEXT = '[data-test="challenge-tap-token-text"]';
const MATCH_BUTTON_SELECTED = '[class="_1rl91 WOZnx _275sd _1ZefG notranslate _6Nozy _1O290 _2HRY_ pmjld edf-m"]';
const NAME = '[data-test="challenge challenge-name"]';
const NAME_PROMPT = '[data-test="challenge-header"]';
const NAME_TEXTBOX = '[data-test="challenge-text-input"]';

const TYPE_READCOMPREHENSION = 'readComprehension';
const READCOMPREHENSION_PROMPT = '[data-test="hint-token"]';
const READCOMPREHENSION = '[data-test="challenge challenge-readComprehension"]';
const READCOMPREHENSION_BUTTONS = '[data-test="challenge-choice"]';

const TYPE_SELECT = 'select';
const SELECT = '[data-test="challenge challenge-select"]';
const SELECT_PROMPT = '[data-test="challenge-header"]';
const SELECT_CHOICES = '[data-test="challenge-choice"]';

const TYPE_TAPCLOZE = 'tapCloze';
const TAPCLOZE = '[data-test="challenge challenge-tapCloze"]';
const TAPCLOZE_PROMPT = '[data-test="hint-token"]';
const TAPCLOZE_SELECTED = '[class="_1LQx7"]';
const TAPCLOZE_BUTTON_TEXT = '[data-test="challenge-tap-token-text"]';

const TYPE_TAPCOMPLETE = 'tapComplete';
const TAPCOMPLETE = '[data-test="challenge challenge-tapComplete"]';
const TAPCOMPLETE_PROMPT = '[data-test="hint-token"]';
const TAPCOMPLETE_SELECTED = '[class="_2Z2xv"]';
const TAPCOMPLETE_SELECTED_TEXT = '[data-test="challenge-tap-token-text"]';

const TYPE_TAPCOMPLETETABLE = 'tapCompleteTable';
const TAPCOMPLETETABLE = '[data-test="challenge challenge-tapCompleteTable"]';
const TAPCOMPLETETABLE_HINT_TOKENS = '[class="_34k_q _3Lg1h _13doy"]';
const TAPCOMPLETETABLE_CHOICES = '[class="_2Z2xv"]';
const TAPCOMPLETETABLE_CHOICE_TEXT = '[data-test="challenge-tap-token-text"]';

const TYPE_TRANSLATE = 'translate';
const TRANSLATE = '[data-test="challenge challenge-translate"]';
const TRANSLATE_PROMPT = '[data-test="hint-token"]';
const TRANSLATE_TEXTBOX = '[data-test="challenge-translate-input"]';

const TYPECLOZE = '[data-test="challenge challenge-typeCloze"]';
const TYPECLOZE_BLANK = '[class="_3bKcr"]';
const TYPECLOZE_CORRECT = '[class="caPDQ"]';
const TYPECLOZE_SUBMISSION = '[class="Y5JxA _17nEt"]';

const TYPECOMPLETETABLE = '[data-test="challenge challenge-typeCompleteTable"]';
const TYPECOMPLETETABLE_BLANKS = '[class="_1Rf3h"]';
const TYPECOMPLETETABLE_ANSWER = '[class="caPDQ"]';
const TYPECOMPLETETABLE_SUBMISSION = '[class="Y5JxA _17nEt"]';

function makeSubmission(extraInfo = null) {
  if (document.querySelector(ASSIST)) {
    const challengePrompt = document.querySelector(ASSIST_PROMPT).textContent;
    const choices = Array.from(document.querySelectorAll(ASSIST_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, TYPE_ASSIST];
  }

  if (document.querySelector(COMPLETEREVERSETRANSLATION)) {
    // eslint-disable-next-line max-len
    const promptArray = Array.from(document.querySelectorAll(COMPLETEREVERSETRANSLATION_PROMPT));
    const challengePrompt = promptArray.map((x) => x.textContent).join('');
    // eslint-disable-next-line max-len
    const textbox = Array.from(document.querySelector(COMPLETEREVERSETRANSLATION_TEXTBOX).children);
    const answerArray = textbox.map((element) => {
      const blank = element.querySelector(COMPLETEREVERSETRANSLATION_BLANK);
      return blank?.value || element.textContent;
    });
    const answer = answerArray.join('');
    console.log(`completeReverseTranslation prompt: ${challengePrompt}`);
    console.log(`completeReverseTranslation answer: ${answer}`);
    return [challengePrompt, answer, TYPE_TRANSLATE];
  }

  if (document.querySelector(DEFINITION)) {
    const challengePrompt = document.querySelector(DEFINITION_PROMPT).textContent.replace(/[“”]+/g, '');
    const choices = Array.from(document.querySelectorAll(DEFINITION_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    console.log(`challenge prompt: ${challengePrompt}`);
    console.log(`choices: ${choices}`);
    console.log(`choice ID: ${choiceID}`);
    return [challengePrompt, choiceID, TYPE_DEFINITION];
  }

  if (document.querySelector(DIALOGUE)) {
    const promptArray = Array.from(document.querySelectorAll(DIALOGUE_CHOICE_TEXT));
    const challengePrompt = promptArray.map((x) => (x.textContent)).join(',');
    const choices = Array.from(document.querySelectorAll(DIALOGUE_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    console.log(`challenge prompt: ${challengePrompt}`);
    console.log(`choices: ${choices}`);
    console.log(`choice ID: ${choiceID}`);
    return [challengePrompt, choiceID, TYPE_DIALOGUE];
  }

  if (document.querySelector(FORM)) {
    const challengePrompt = document.querySelector(FORM_PROMPT);
    const promptNoBlank = challengePrompt.dataset.prompt.replace(/_/g, '');
    const choices = Array.from(document.querySelectorAll(FORM_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [promptNoBlank, choiceID, TYPE_FORM];
  }

  if (document.querySelector(GAPFILL)) {
    const promptArray = Array.from(document.querySelectorAll(GAPFILL_PROMPT));
    const challengePrompt = promptArray.map((x) => (x.textContent)).join('');
    const choices = Array.from(document.querySelectorAll(GAPFILL_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, TYPE_GAPFILL];
  }

  if (document.querySelector(JUDGE)) {
    const challengePrompt = document.querySelector(JUDGE_PROMPT).textContent;
    const choices = Array.from(document.querySelectorAll(JUDGE_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, TYPE_JUDGE];
  }

  if (document.querySelector(MATCH)) {
    const buttonArray = Array.from(document.querySelectorAll(MATCH_BUTTON_TEXT));
    const buttonCount = buttonArray.length;
    const learningTokenButtons = buttonArray.slice(buttonCount / 2);
    const challengePrompt = learningTokenButtons.map((x) => x.textContent).sort().join(' ');
    const choices = extraInfo;
    return [challengePrompt, choices, TYPE_MATCH];
  }

  if (document.querySelector(NAME)) {
    const challengePromptVerbose = document.querySelector(NAME_PROMPT).textContent;
    const challengePrompt = challengePromptVerbose.match(/“(.*?)”/)[1];
    const textBox = document.querySelector(NAME_TEXTBOX);
    const answer = textBox.value;
    return [challengePrompt, answer, TYPE_TRANSLATE];
  }

  if (document.querySelector(SELECT)) {
    const challengePrompt = document.querySelector(SELECT_PROMPT).textContent;
    const choices = Array.from(document.querySelectorAll(SELECT_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, TYPE_SELECT];
  }

  if (document.querySelector(READCOMPREHENSION)) {
    const promptArray = Array.from(document.querySelectorAll(READCOMPREHENSION_PROMPT));
    const challengePrompt = promptArray.map((x) => x.textContent).join('');
    console.log(`Prompt submitted: ${challengePrompt}`);
    const choices = Array.from(document.querySelectorAll(READCOMPREHENSION_BUTTONS));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, TYPE_READCOMPREHENSION];
  }

  if (document.querySelector(TAPCLOZE)) {
    const promptArray = Array.from(document.querySelectorAll(TAPCLOZE_PROMPT));
    const challengePrompt = promptArray.map((x) => x.textContent).join('');
    const chosenButton = document.querySelector(TAPCLOZE_SELECTED);
    const chosenButtonText = chosenButton.querySelector(TAPCLOZE_BUTTON_TEXT).textContent;
    return [challengePrompt, chosenButtonText, TYPE_TAPCLOZE];
  }

  if (document.querySelector(TAPCOMPLETE)) {
    const promptArray = Array.from(document.querySelectorAll(TAPCOMPLETE_PROMPT));
    const challengePrompt = promptArray.map((x) => x.textContent).filter((x) => x !== ' ').join(' ');
    const selectionArray = Array.from(document.querySelectorAll(TAPCOMPLETE_SELECTED));
    const selectionText = selectionArray.map((button) => button.querySelector(TAPCOMPLETE_SELECTED_TEXT).textContent).join(' ');
    console.log(`Prompt submitted: ${challengePrompt}`);
    console.log(`Answer submitted: ${selectionText}`);
    return [challengePrompt, selectionText, TYPE_TAPCOMPLETE];
  }

  if (document.querySelector(TAPCOMPLETETABLE)) {
    // eslint-disable-next-line max-len
    const promptArray = Array.from(document.querySelectorAll(TAPCOMPLETETABLE_HINT_TOKENS)).slice(1);
    const challengePrompt = promptArray.map((x) => x.textContent).sort();

    const choiceArray = Array.from(document.querySelectorAll(TAPCOMPLETETABLE_CHOICES));
    // eslint-disable-next-line max-len
    const choices = choiceArray.map((x) => x.querySelector(TAPCOMPLETETABLE_CHOICE_TEXT).textContent).join();

    return [challengePrompt, choices, TYPE_TAPCOMPLETETABLE];
  }

  if (document.querySelector(TRANSLATE)) {
    const promptArray = Array.from(document.querySelectorAll(TRANSLATE_PROMPT));
    const challengePrompt = promptArray.map((x) => x.textContent).join('');
    const answer = document.querySelector(TRANSLATE_TEXTBOX).value;
    console.log(`Translate prompt submitted: ${challengePrompt}`);
    return [challengePrompt, answer, TYPE_TRANSLATE];
  }

  if (document.querySelector(TYPECLOZE)) {
    const blank = document.querySelector(TYPECLOZE_BLANK);
    const correctAnswer = blank.querySelector(TYPECLOZE_CORRECT).textContent.replace(/_/g, '');
    const submission = blank.querySelector(TYPECLOZE_SUBMISSION).value.replace(IGNORED_CHARACTERS, '');
    return correctAnswer.toLowerCase() === submission.toLowerCase()
      ? [SKIP_CHECKING_TRUE, null, null]
      : [SKIP_CHECKING_FALSE, null, null];
  }

  if (document.querySelector(TYPECOMPLETETABLE)) {
    const blanks = Array.from(document.querySelectorAll(TYPECOMPLETETABLE_BLANKS));
    console.log(`blanks: ${blanks}`);
    const correct = blanks.every((blank) => {
      const correctAnswer = blank.querySelector(TYPECOMPLETETABLE_ANSWER).textContent.replace(IGNORED_CHARACTERS, '');
      console.log(`Corect answer: ${correctAnswer}`);
      const submission = blank.querySelector(TYPECOMPLETETABLE_SUBMISSION).value;
      console.log(`Submitted answer: ${submission}`);
      return correctAnswer.toLowerCase() === submission.toLowerCase().trim();
    });
    const challengePrompt = correct ? SKIP_CHECKING_TRUE : SKIP_CHECKING_FALSE;
    return [challengePrompt, null, null];
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

    const previousText = previouslyClicked.querySelector(MATCH_BUTTON_TEXT).textContent;
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
