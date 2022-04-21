import * as constants from './challengeTypeConstants';

export default function makeSubmission(extraInfo = null) {
  if (document.querySelector(constants.COMPLETEREVERSETRANSLATION)) {
    // eslint-disable-next-line max-len
    const blanks = Array.from(document.querySelectorAll(constants.COMPLETEREVERSETRANSLATION_BLANKS));
    const correct = blanks.every((blank) => {
      const correctAnswer = blank.querySelector(constants.COMPLETEREVERSETRANSLATION_ANSWER).textContent.replace(constants.IGNORED_CHARACTERS, '');
      const submission = blank.querySelector(constants.COMPLETEREVERSETRANSLATION_SUBMISSION).value.replace(constants.IGNORED_CHARACTERS, '');
      return correctAnswer.toLowerCase() === submission.toLowerCase();
    });
    const challengePrompt = correct ? constants.SKIP_CHECKING_TRUE : constants.SKIP_CHECKING_FALSE;
    return [challengePrompt, null, null];
  }

  if (document.querySelector(constants.FORM)) {
    const challengePrompt = document.querySelector(constants.FORM_PROMPT);
    const promptNoBlank = challengePrompt.dataset.prompt.replace(/_/g, '');
    const choices = Array.from(document.querySelectorAll(constants.FORM_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [promptNoBlank, choiceID, constants.TYPE_FORM];
  }

  if (document.querySelector(constants.GAPFILL)) {
    const promptArray = Array.from(document.querySelectorAll(constants.GAPFILL_PROMPT));
    const challengePrompt = promptArray.map((x) => (x.textContent)).join('');
    console.log(`Prompt received: ${challengePrompt}`);
    const choices = Array.from(document.querySelectorAll(constants.GAPFILL_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, constants.TYPE_GAPFILL];
  }

  if (document.querySelector(constants.JUDGE)) {
    const challengePrompt = document.querySelector(constants.JUDGE_PROMPT).textContent;
    const choices = Array.from(document.querySelectorAll(constants.JUDGE_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, constants.TYPE_JUDGE];
  }
 
  if (document.querySelector(constants.MATCH)) {
    const buttonList = Array.from(document.querySelectorAll(constants.MATCH_BUTTONS));
    const buttonCount = buttonList.length;
    const learningTokenButtons = buttonList.slice(buttonCount / 2);
    const challengePrompt = learningTokenButtons.map((x) => x.innerHTML.split('</span>')[1]).sort().join('');
    const choices = extraInfo;
    return [challengePrompt, choices, constants.TYPE_MATCH];
  }

  if (document.querySelector(constants.SELECT)) {
    const challengePrompt = document.querySelector(constants.SELECT_PROMPT).textContent;
    const choices = Array.from(document.querySelectorAll(constants.SELECT_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, constants.TYPE_SELECT];
  }

  if (document.querySelector(constants.TAPCOMPLETETABLE)) {
    // eslint-disable-next-line max-len
    const promptArray = Array.from(document.querySelectorAll(constants.TAPCOMPLETETABLE_HINT_TOKENS)).slice(1);
    const promptArrayText = promptArray.map((x) => x.textContent);
    // promptArray.forEach((x) => {
    //   const hintTokenArray = Array.from(x.querySelectorAll(constants.TAPCOMPLETETABLE_PROMPT));
    //   hintTokenArray.pop();
    //   hintTokenArray.forEach((token) => {
    //     console.log(`Token text: ${token.textContent}`);
    //     promptArrayText.push(token.textContent);
    //   });
    // });
    const challengePrompt = promptArrayText.sort().join();
    const choiceArray = Array.from(document.querySelectorAll(constants.TAPCOMPLETETABLE_CHOICES));
    // eslint-disable-next-line max-len
    const choices = choiceArray.map((x) => x.querySelector(constants.TAPCOMPLETETABLE_CHOICE_TEXT).textContent).join();
    const challengePromptUnique = `${challengePrompt},${choices}`;
    console.log(`Prompt encountered: ${challengePromptUnique}`);
    console.log(`Selected: ${choices}`);
    return [challengePromptUnique, choices, constants.TYPE_TAPCOMPLETETABLE];
  }

  if (document.querySelector(constants.TRANSLATE)) {
    const promptCollection = Array.from(document.querySelectorAll(constants.TRANSLATE_PROMPT));
    const challengePrompt = promptCollection.map((x) => x.textContent).join('');
    const answer = document.querySelector(constants.TRANSLATE_TEXTBOX).value;
    return [challengePrompt, answer, constants.TYPE_TRANSLATE];
  }

  if (document.querySelector(constants.TYPECOMPLETETABLE)) {
    const blanks = Array.from(document.querySelectorAll(constants.TYPECOMPLETETABLE_BLANKS));
    const correct = blanks.every((blank) => {
      const correctAnswer = blank.querySelector(constants.TYPECOMPLETETABLE_ANSWER).textContent.replace(constants.IGNORED_CHARACTERS, '');
      const submission = blank.querySelector(constants.TYPECOMPLETETABLE_SUBMISSION).value;
      return correctAnswer.toLowerCase() === submission.toLowerCase().trim();
    });
    const challengePrompt = correct ? constants.SKIP_CHECKING_TRUE : constants.SKIP_CHECKING_FALSE;
    return [challengePrompt, null, null];
  }

  return 0;
}
