import * as constants from './challengeTypeConstants';

export default function makeSubmission(extraInfo = null) {
  if (document.querySelector(constants.ASSIST)) {
    const challengePrompt = document.querySelector(constants.ASSIST_PROMPT).textContent;
    const choices = Array.from(document.querySelectorAll(constants.ASSIST_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    console.log("assist detected");
    console.log(`assist prompt: ${challengePrompt}`);
    console.log(`assist button chosen: ${choiceID}`);
    return [challengePrompt, choiceID, constants.TYPE_ASSIST];
  }

  if (document.querySelector(constants.COMPLETEREVERSETRANSLATION)) {
    console.log('completeReverseTranslation detected');
    // eslint-disable-next-line max-len
    const promptArray = Array.from(document.querySelectorAll(constants.COMPLETEREVERSETRANSLATION_PROMPT));
    const challengePrompt = promptArray.map((x) => x.textContent).join('');
    const answer = document.querySelector(constants.TRANSLATE_TEXTBOX)?.value;
    if (answer === undefined) {
      // eslint-disable-next-line max-len
      const textbox = Array.from(document.querySelector(constants.COMPLETEREVERSETRANSLATION_TEXTBOX).children);
      console.log('completeReverseTranslation textbox:');
      console.log(textbox);
      const answerArray = textbox.map((element) => {
        const blank = element.querySelector(constants.COMPLETEREVERSETRANSLATION_BLANK);
        return blank?.value || element.textContent;
      });
      const answer = answerArray.join('');
      console.log(`completeReverseTranslation prompt: ${challengePrompt}`);
      console.log(`completeReverseTranslation answer: ${answer}`);
    }
    return [challengePrompt, answer, constants.TYPE_TRANSLATE];
  }

  if (document.querySelector(constants.DEFINITION)) {
    const challengePrompt = document.querySelector(constants.DEFINITION_PROMPT).textContent.replace(/[“”]+/g, '');
    const choices = Array.from(document.querySelectorAll(constants.DEFINITION_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    console.log(`challenge prompt: ${challengePrompt}`);
    console.log(`choices: ${choices}`);
    console.log(`choice ID: ${choiceID}`);
    return [challengePrompt, choiceID, constants.TYPE_DEFINITION];
  }

  if (document.querySelector(constants.DIALOGUE)) {
    const promptArray = Array.from(document.querySelectorAll(constants.DIALOGUE_CHOICE_TEXT));
    const challengePrompt = promptArray.map((x) => (x.textContent)).join(',');
    const choices = Array.from(document.querySelectorAll(constants.DIALOGUE_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    console.log(`challenge prompt: ${challengePrompt}`);
    console.log(`choices: ${choices}`);
    console.log(`choice ID: ${choiceID}`);
    return [challengePrompt, choiceID, constants.TYPE_DIALOGUE];
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

  // if (document.querySelector(constants.LISTENTAP)) {
  //   console.log('listenTap detected');
  //   const promptArray = Array.from(document.querySelectorAll(constants.LISTENTAP_PROMPT));
  //   const challengePrompt = promptArray.map((x) => x.textContent).join('');
  //   const answerArea = document.querySelector(constants.LISTENTAP_ANSWER_AREA);
  //   const selectionArray = Array.from(answerArea.querySelectorAll(constants.LISTENTAP_BUTTON));
  //   const selectionText = selectionArray.map((button) => button.textContent).join(' ');
  //   console.log(`ListenTap prompt: ${challengePrompt}`);
  //   console.log(`ListenTap array: ${selectionArray}`);
  //   console.log(`ListenTap answer: ${selectionText}`);
  //   return [challengePrompt, selectionText, constants.TYPE_TRANSLATE];
  // }

  if (document.querySelector(constants.MATCH)) {
    const buttonArray = Array.from(document.querySelectorAll(constants.MATCH_BUTTON_TEXT));
    const buttonCount = buttonArray.length;
    const learningTokenButtons = buttonArray.slice(buttonCount / 2);
    const challengePrompt = learningTokenButtons.map((x) => x.textContent).sort().join(' ');
    const choices = extraInfo;
    return [challengePrompt, choices, constants.TYPE_MATCH];
  }

  if (document.querySelector(constants.NAME)) {
    const challengePromptVerbose = document.querySelector(constants.NAME_PROMPT).textContent;
    const challengePrompt = challengePromptVerbose.match(/“(.*?)”/)[1];
    const textBox = document.querySelector(constants.NAME_TEXTBOX);
    const answer = textBox.value;
    return [challengePrompt, answer, constants.TYPE_TRANSLATE];
  }

  if (document.querySelector(constants.PARTIALREVERSETRANSLATE)) {
    console.log('partialReverseTranslate detected');
    const promptArray = Array.from(document.querySelectorAll(constants.PARTIALREVERSETRANSLATE_PROMPT));
    const challengePrompt = promptArray.map((x) => x.textContent).join('');
    console.log(`Prompt submitted: ${challengePrompt}`);
    const textbox = document.querySelector(constants.PARTIALREVERSETRANSLATE_TEXTBOX);
    const answerArray = Array.from(textbox.querySelectorAll(constants.PARTIALREVERSETRANSLATE_TEXT));
    console.log(`answerArrray: ${answerArray}`);
    const answer = answerArray.map((x) => x.textContent).join('');
    console.log(`answer: ${answer}`);
    return [challengePrompt, answer, constants.TYPE_TRANSLATE];
  }

  if (document.querySelector(constants.READCOMPREHENSION)) {
    const promptArray = Array.from(document.querySelectorAll(constants.READCOMPREHENSION_PROMPT));
    const challengePrompt = promptArray.map((x) => x.textContent).join('');
    console.log(`Prompt submitted: ${challengePrompt}`);
    const choices = Array.from(document.querySelectorAll(constants.READCOMPREHENSION_BUTTONS));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, constants.TYPE_READCOMPREHENSION];
  }

  if (document.querySelector(constants.SELECT)) {
    const challengePrompt = document.querySelector(constants.SELECT_PROMPT).textContent;
    const choices = Array.from(document.querySelectorAll(constants.SELECT_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, constants.TYPE_SELECT];
  }


  if (document.querySelector(constants.TAPCLOZE)) {
    const promptArray = Array.from(document.querySelectorAll(constants.TAPCLOZE_PROMPT));
    const challengePrompt = promptArray.map((x) => x.textContent).join('');
    const chosenButton = document.querySelector(constants.TAPCLOZE_SELECTED);
    const chosenButtonText = chosenButton.querySelector(constants.TAPCLOZE_BUTTON_TEXT).textContent;
    return [challengePrompt, chosenButtonText, constants.TYPE_TAPCLOZE];
  }

  if (document.querySelector(constants.TAPCOMPLETE)) {
    const promptArray = Array.from(document.querySelectorAll(constants.TAPCOMPLETE_PROMPT));
    const challengePrompt = promptArray.map((x) => x.textContent).filter((x) => x !== ' ').join(' ');
    const selectionArray = Array.from(document.querySelectorAll(constants.TAPCOMPLETE_SELECTED));
    const selectionText = selectionArray.map((button) => button.querySelector(constants.TAPCOMPLETE_SELECTED_TEXT).textContent).join(' ');
    console.log(`Prompt submitted: ${challengePrompt}`);
    console.log(`Answer submitted: ${selectionText}`);
    return [challengePrompt, selectionText, constants.TYPE_TAPCOMPLETE];
  }

  if (document.querySelector(constants.TAPCOMPLETETABLE)) {
    // eslint-disable-next-line max-len
    const promptArray = Array.from(document.querySelectorAll(constants.TAPCOMPLETETABLE_HINT_TOKENS)).slice(1);
    const challengePrompt = promptArray.map((x) => x.textContent).sort();

    const choiceArray = Array.from(document.querySelectorAll(constants.TAPCOMPLETETABLE_CHOICES));
    // eslint-disable-next-line max-len
    const choices = choiceArray.map((x) => x.querySelector(constants.TAPCOMPLETETABLE_CHOICE_TEXT).textContent).join();

    return [challengePrompt, choices, constants.TYPE_TAPCOMPLETETABLE];
  }

  if (document.querySelector(constants.TRANSLATE)) {
    const promptArray = Array.from(document.querySelectorAll(constants.TRANSLATE_PROMPT));
    const challengePrompt = promptArray.map((x) => x.textContent).join('');
    const answer = document.querySelector(constants.TRANSLATE_TEXTBOX)?.value;
    if (answer === undefined) {
      const answerArea = document.querySelector(constants.SPEAK_ANSWER_AREA);
      const selectionArrayClick = Array.from(answerArea.querySelectorAll(constants.SPEAK_SELECTED_TEXT_CLICK));
      const selectionArrayType = Array.from(answerArea.querySelectorAll(constants.SPEAK_BUTTON_TYPE));
      const selectionArray = selectionArrayClick.length ? selectionArrayClick : selectionArrayType;
      const selectionText = selectionArray.map((button) => button.textContent).join(' ');
      console.log(`Speak prompt: ${challengePrompt}`);
      console.log(`Speak array: ${selectionArray}`);
      console.log(`Speak answer: ${selectionText}`);
      return [challengePrompt, selectionText, constants.TYPE_TRANSLATE];
    }

    console.log(`Translate prompt submitted: ${challengePrompt}`);
    return [challengePrompt, answer, constants.TYPE_TRANSLATE];
  }

  if (document.querySelector(constants.TYPECLOZE)) {
    const blank = document.querySelector(constants.TYPECLOZE_BLANK);
    const correctAnswer = blank.querySelector(constants.TYPECLOZE_CORRECT).textContent.replace(/_/g, '');
    const submission = blank.querySelector(constants.TYPECLOZE_SUBMISSION).value.replace(constants.IGNORED_CHARACTERS, '');
    return correctAnswer.toLowerCase() === submission.toLowerCase()
      ? [constants.SKIP_CHECKING_TRUE, null, null]
      : [constants.SKIP_CHECKING_FALSE, null, null];
  }

  if (document.querySelector(constants.TYPECOMPLETETABLE)) {
    const blanks = Array.from(document.querySelectorAll(constants.TYPECOMPLETETABLE_BLANKS));
    console.log(`blanks: ${blanks}`);
    const correct = blanks.every((blank) => {
      const correctAnswer = blank.querySelector(constants.TYPECOMPLETETABLE_ANSWER).textContent.replace(constants.IGNORED_CHARACTERS, '');
      console.log(`Corect answer: ${correctAnswer}`);
      const submission = blank.querySelector(constants.TYPECOMPLETETABLE_SUBMISSION).value;
      console.log(`Submitted answer: ${submission}`);
      return correctAnswer.toLowerCase() === submission.toLowerCase().trim();
    });
    const challengePrompt = correct ? constants.SKIP_CHECKING_TRUE : constants.SKIP_CHECKING_FALSE;
    return [challengePrompt, null, null];
  }

  return 0;
}
