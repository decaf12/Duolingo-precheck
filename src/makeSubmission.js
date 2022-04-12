import * as constants from './challengeTypeConstants';

export function makeSubmission() {
  if (document.querySelector(constants.TRANSLATE)) {
    const promptCollection = Array.from(document.querySelectorAll(constants.TRANSLATE_PROMPT));
    const challengePrompt = promptCollection.map((x) => x.textContent).join('');
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
    const challengePrompt = document.querySelector(constants.JUDGE_PROMPT).textContent;
    const choices = Array.from(document.querySelectorAll(constants.JUDGE_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, constants.TYPE_JUDGE];
  }

  if (document.querySelector(constants.SELECT)) {
    const challengePrompt = document.querySelector(constants.SELECT_PROMPT).textContent;
    const choices = Array.from(document.querySelectorAll(constants.SELECT_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, constants.TYPE_SELECT];
  }
  return 0;
}

export function addSubmissionListener(button) {
  button.addEventListener('click', (e) => {
    const clickedButton = document.querySelector(constants.MATCH_BUTTON_SELECTED);
    if (!clickedButton) {
      return;
    }
    const buttonText1 = clickedButton.innerHTML.split('</span>')[1];
    const buttonText2 = button.innerHTML.split('</span>')[1];
    console.log(`Clicked: ${buttonText1}, clicked 2: ${buttonText2}`);
  });
}
