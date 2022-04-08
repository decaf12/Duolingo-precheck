import * as constants from './challengeTypeConstants';

export default function makeSubmission() {
  if (document.querySelector(constants.TRANSLATE)) {
    const promptCollection = Array.from(document.querySelectorAll(constants.TRANSLATE_PROMPT));
    const prompt = promptCollection.map((x) => x.innerHTML).join('');
    const answer = document.querySelector(constants.TRANSLATE_TEXTBOX).value;
    return [prompt, answer, constants.TYPE_TRANSLATE];
  }

  if (document.querySelector(constants.FORM)) {
    console.log('Form detected');
    const prompt = document.querySelector(constants.FORM_PROMPT);
    const promptNoBlank = prompt.dataset.prompt.replace(/_/g, '');
    const choices = Array.from(document.querySelectorAll(constants.FORM_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [promptNoBlank, choiceID, constants.TYPE_FORM];
  }

  if (document.querySelector(constants.JUDGE)) {
    console.log('Judge detected');
    const prompt = document.querySelector(constants.JUDGE_PROMPT).innerHTML;
    const choices = Array.from(document.querySelectorAll(constants.JUDGE_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [prompt, choiceID, constants.TYPE_JUDGE];
  }
  return 0;
}
