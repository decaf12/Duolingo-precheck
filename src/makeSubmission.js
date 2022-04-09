import * as constants from './challengeTypeConstants';

export default function makeSubmission() {
  if (document.querySelector(constants.TRANSLATE)) {
    const promptCollection = Array.from(document.querySelectorAll(constants.TRANSLATE_PROMPT));
    const challengePrompt = promptCollection.map((x) => x.innerHTML).join('');
    const answer = document.querySelector(constants.TRANSLATE_TEXTBOX).value;
    return [challengePrompt, answer, constants.TYPE_TRANSLATE];
  }

  if (document.querySelector(constants.FORM)) {
    const challengePrompt = document.querySelector(constants.FORM_PROMPT);
    const promptNoBlank = challengePrompt.dataset.prompt.replace(/_/g, '');
    const choices = Array.from(document.querySelectorAll(constants.FORM_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [promptNoBlank, choiceID, constants.TYPE_FORM];
  }

  if (document.querySelector(constants.JUDGE)) {
    const challengePrompt = document.querySelector(constants.JUDGE_PROMPT).innerHTML;
    const choices = Array.from(document.querySelectorAll(constants.JUDGE_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, constants.TYPE_JUDGE];
  }

  if (document.querySelector(constants.SELECT)) {
    const challengePrompt = document.querySelector(constants.SELECT_PROMPT).innerHTML.replace(/[\u201C\u201D]/g, '"');
    const choices = Array.from(document.querySelectorAll(constants.SELECT_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, constants.TYPE_SELECT];
  }
  return 0;
}
