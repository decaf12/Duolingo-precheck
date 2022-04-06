import * as constants from './constants';
import * as DOMConstants from './DOMConstants';

export default function makeSubmission() {
  if (document.querySelector(DOMConstants.TRANSLATE)) {
    const promptCollection = Array.from(document.querySelectorAll(DOMConstants.TRANSLATE_PROMPT));
    const prompt = promptCollection.map((x) => x.innerHTML).join('');
    const answer = document.querySelector(DOMConstants.ANSWER_FILTER_TEXTBOX).value;
    return [prompt, answer, constants.TYPE_TRANSLATE];
  }

  if (document.querySelectorAll(DOMConstants.FORM)) {
    const prompt = document.querySelector(DOMConstants.FORM_PROMPT);
    const choices = Array.from(document.querySelectorAll(DOMConstants.FORM_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [prompt.dataset.prompt, choiceID, constants.TYPE_FORM];
  }

  return 0;
}
