import * as constants from './constants';
import * as DOMConstants from './DOMConstants';

export default function makeSubmission() {
  if (document.querySelector(DOMConstants.TRANSLATE)) {
    const promptCollection = Array.from(document.querySelectorAll(DOMConstants.TRANSLATE_PROMPT));
    const prompt = promptCollection.map((x) => x.innerHTML).join('');
    const answer = document.querySelector(DOMConstants.TRANSLATE_TEXTBOX).value;
    return [prompt, answer, constants.TYPE_TRANSLATE];
  }

  if (document.querySelector(DOMConstants.FORM)) {
    console.log('Form detected');
    const prompt = document.querySelector(DOMConstants.FORM_PROMPT);
    const promptNoBlank = prompt.dataset.prompt.replace(/_/g, '');
    const choices = Array.from(document.querySelectorAll(DOMConstants.FORM_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [promptNoBlank, choiceID, constants.TYPE_FORM];
  }

  if (document.querySelector(DOMConstants.JUDGE)) {
    console.log('Judge detected');
    const prompt = document.querySelector(DOMConstants.JUDGE_PROMPT).innerHTML;
    const choices = Array.from(document.querySelectorAll(DOMConstants.JUDGE_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [prompt, choiceID, constants.TYPE_JUDGE];
  }
  return 0;
}
