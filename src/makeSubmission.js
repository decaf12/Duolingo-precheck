import * as constants from './challengeTypeConstants';

export default function makeSubmission(extraInfo = null) {
  if (document.querySelector(constants.FORM)) {
    const challengePrompt = document.querySelector(constants.FORM_PROMPT);
    const promptNoBlank = challengePrompt.dataset.prompt.replace(/_/g, '');
    const choices = Array.from(document.querySelectorAll(constants.FORM_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [promptNoBlank, choiceID, constants.TYPE_FORM];
  }

  if (document.querySelector(constants.JUDGE)) {
    const challengePrompt = document.querySelector(constants.JUDGE_PROMPT).textContent;
    const choices = Array.from(document.querySelectorAll(constants.JUDGE_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, constants.TYPE_JUDGE];
  }

  if (document.querySelector(constants.TRANSLATE)) {
    const promptCollection = Array.from(document.querySelectorAll(constants.TRANSLATE_PROMPT));
    const challengePrompt = promptCollection.map((x) => x.textContent).join('');
    const answer = document.querySelector(constants.TRANSLATE_TEXTBOX).value;
    return [challengePrompt, answer, constants.TYPE_TRANSLATE];
  }

  if (document.querySelector(constants.SELECT)) {
    const challengePrompt = document.querySelector(constants.SELECT_PROMPT).textContent;
    const choices = Array.from(document.querySelectorAll(constants.SELECT_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, constants.TYPE_SELECT];
  }

  if (document.querySelector(constants.MATCH)) {
    const buttonList = Array.from(document.querySelectorAll(constants.MATCH_BUTTONS));
    const buttonCount = buttonList.length;
    const learningTokenButtons = buttonList.slice(buttonCount / 2);
    const challengePrompt = learningTokenButtons.map((x) => x.innerHTML.split('</span>')[1]).sort().join('');
    const choices = extraInfo;
    return [challengePrompt, choices, constants.TYPE_MATCH];
  }

  if (document.querySelector(constants.COMPLETEREVERSETRANSLATION)) {
    // eslint-disable-next-line max-len
    const promptCollection = Array.from(document.querySelectorAll(constants.COMPLETEREVERSETRANSLATION_PROMPT));
    const challengePrompt = promptCollection.map((x) => x.textContent).join('');
    // eslint-disable-next-line max-len
    const answers = Array.from(document.querySelectorAll(constants.COMPLETEREVERSETRANSLATION_FILLED));
    const answerList = answers.map((x) => x.value).join();
    return [challengePrompt, answerList, constants.TYPE_COMPLETEREVERSETRANSLATION];
  }
  return 0;
}
