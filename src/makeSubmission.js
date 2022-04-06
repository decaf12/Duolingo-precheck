import * as constants from './constants';
import * as DOMConstants from './DOMConstants';

export default function makeSubmission() {
  if (Array.from(document.querySelectorAll(DOMConstants.TRANSLATE)).length > 0) {
    const promptCollection = Array.from(document.querySelectorAll(DOMConstants.TRANSLATE_PROMPT));
    const prompt = promptCollection.map((x) => x.innerHTML).join('');
    const answer = document.querySelectorAll(DOMConstants.ANSWER_FILTER_TEXTBOX)[0].value;
    return [prompt, answer, constants.TYPE_TRANSLATE];
  }

  if (Array.from(document.querySelectorAll(DOMConstants.FORM)).length > 0) {
    // eslint-disable-next-line no-unused-vars
    const [prompt, ...rest] = Array.from(document.querySelectorAll(DOMConstants.FORM_PROMPT));
    const choices = Array.from(document.querySelectorAll(DOMConstants.FORM_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [prompt.dataset.prompt, choiceID, constants.TYPE_FORM];
  }

  return 0;
}
