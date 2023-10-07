import { n as newConsole, g as getReactFiber } from './getReactFiber-a328b13c.js';

const SUBMISSION_BUTTON_LESSON = '[data-test="player-next"]';
const SUBMISSION_BUTTON_SPAN = '[class="_13HXc"]';
const MULTIPLE_CHOICE_CHOICES = '[data-test="challenge-choice"]';

const IGNORED_CHARACTERS = /[_\-\s,.?!;]/g;
const COMPLETEREVERSETRANSLATION_TEXTBOX = '[class="_3f_Q3 _2FKqf _2ti2i"]';
const COMPLETEREVERSETRANSLATION_BLANK = '[data-test="challenge-text-input"]';

const LISTENCOMPLETE_TEXTBOX = '[class="_3t3oQ _2FKqf _2ti2i"]';
const LISTENCOMPLETE_BLANK = '[data-test="challenge-text-input"]';
const LISTENMATCH_SOUNDWAVE = '[class="_2GTek _1bxd8 _19tAr"]';
const MATCH_BUTTONS = '[class="_1deIS"]';
const MATCH_BUTTON_TEXT = '[data-test="challenge-tap-token-text"]';
const MATCH_BUTTON_SELECTED = '[class="_1rl91 WOZnx _275sd _1ZefG notranslate _6Nozy _1O290 _2HRY_ pmjld edf-m"]';
const NAME_BUTTON = '[data-test="challenge-choice"]';
const NAME_BUTTON_TEXT = '[data-test="challenge-judge-text"]';
const NAME_BUTTON_SELECTED = '_3C_oC disCS _2bJln _2-OmZ';
const NAME_TEXTBOX = '[data-test="challenge-text-input"]';
const PARTIALREVERSETRANSLATE_TEXTBOX = '[class="_1fYGK _2FKqf _2ti2i"]';
const PARTIALREVERSETRANSLATE_TEXT = 'span:not([class]), [contenteditable="true"]';
const SPEAK_ANSWER_AREA = '[class="PcKtj"]';
const TAPCLOZE_SELECTED = '[class="_1LQx7"]';
const TAPCLOZE_BUTTON_TEXT = '[data-test="challenge-tap-token-text"]';
const TAPCOMPLETE_SELECTED = '[class="_2Z2xv"]';
const TAPCOMPLETE_SELECTED_TEXT_CLICK = '[data-test="challenge-tap-token-text"]';
const TAPCOMPLETE_SELECTED_TEXT_TYPE = '[class="_2J2do"]';
const TAPCOMPLETE_SELECTED_TEXT = `${TAPCOMPLETE_SELECTED_TEXT_CLICK}, ${TAPCOMPLETE_SELECTED_TEXT_TYPE}`;
const TAPCOMPLETETABLE_CHOICES = '[class="_2Z2xv"]';
const TAPCOMPLETETABLE_CHOICE_TEXT = '[data-test="challenge-tap-token-text"]';
const TRANSLATE_TEXTBOX = '[data-test="challenge-translate-input"]';
const TYPECLOZE_BLANK = '[class="_3bKcr"]';
const TYPECLOZE_CORRECT = '[class="caPDQ"]';
const TYPECLOZE_SUBMISSION = '[class="Y5JxA _17nEt"]';
const TYPECOMPLETETABLE_BLANKS = '[class="_1Rf3h"]';
const TYPECOMPLETETABLE_ANSWER = '[class="caPDQ"]';
const TYPECOMPLETETABLE_SUBMISSION = '[class="Y5JxA _17nEt"]';

/* eslint-disable no-unused-vars */

const accentMap = JSON.parse('{"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","×":"x","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","÷":"/","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Ĉ":"C","ĉ":"c","Ċ":"C","ċ":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"D","đ":"d","Ē":"E","ē":"e","Ĕ":"E","ĕ":"e","Ė":"E","ė":"e","Ę":"E","ę":"e","Ě":"E","ě":"e","Ĝ":"G","ĝ":"g","Ğ":"G","ğ":"g","Ġ":"G","ġ":"g","Ģ":"G","ģ":"g","Ĥ":"H","ĥ":"h","Ħ":"H","ħ":"h","Ĩ":"I","ĩ":"i","Ī":"I","ī":"i","Ĭ":"I","ĭ":"i","Į":"I","į":"i","İ":"I","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","ĺ":"l","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ŀ":"L","ŀ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ŏ":"O","ŏ":"o","Ő":"O","ő":"o","Ŕ":"R","ŕ":"r","Ŗ":"R","ŗ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ŝ":"S","ŝ":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ŧ":"T","ŧ":"t","Ũ":"U","ũ":"u","Ū":"U","ū":"u","Ŭ":"U","ŭ":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ơ":"O","ơ":"o","Ư":"U","ư":"u","Ș":"S","ș":"s","Ț":"T","ț":"t","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ό":"Ο","Ύ":"Υ","Ώ":"Ω","ΐ":"ι","Ϊ":"Ι","Ϋ":"Υ","ά":"α","έ":"ε","ή":"η","ί":"ι","ΰ":"υ","ϊ":"ι","ϋ":"υ","ό":"ο","ύ":"υ","ώ":"ω","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y"}');

function startsWithAt(target, candidate, startPos, strictCmp) {
  const targetLen = target.length;
  const candidateLen = candidate.length;
  if (candidateLen - startPos < targetLen) {
    return false;
  }

  for (let i = 0; i < targetLen; i += 1) {
    const targetLetter = target[i];
    const candidateLetter = candidate[startPos + i];

    const targetLetterUpper = targetLetter.toUpperCase();
    const candidateLetterUpper = candidateLetter.toUpperCase();

    const targetLetterLenient = accentMap[targetLetterUpper] || targetLetterUpper;
    const candidateLetterLenient = accentMap[candidateLetterUpper] || candidateLetterUpper;

    if (strictCmp && targetLetter !== candidateLetter) {
      return false;
    }

    if (targetLetterLenient !== candidateLetterLenient) {
      return false;
    }
  }

  return true;
}

function markTranslate(answer, vertices) {
  const answerNoSpaces = answer.replace(IGNORED_CHARACTERS, '');
  const lastVertexID = vertices.length - 1;
  const lastPos = answerNoSpaces.length;
  const stack = [[0, 0, { 0: null }]];

  while (stack.length > 0) {
    const [currVertexID, currPos, currVisited] = stack.pop();

    if (currVertexID === lastVertexID && currPos >= lastPos) {
      return true;
    }

    vertices[currVertexID].forEach((vertex) => {
      if (!(vertex.to in currVisited)) {
        const lenientLen = vertex.lenient.length;

        if (!vertex.lenient.trim().length) {
          stack.push([vertex.to, currPos, { ...currVisited, [vertex.to]: null }]);
        // eslint-disable-next-line max-len
        } else if (startsWithAt(vertex.lenient, answerNoSpaces, currPos, false)) {
          stack.push([vertex.to, currPos + lenientLen, { ...currVisited, [vertex.to]: null }]);
        } else if ('orig' in vertex) {
          const origLen = vertex.orig.length;
          // const origNoPunctuation = vertex.orig.replace(constants.IGNORED_CHARACTERS, '');
          const origNoPunctuation = vertex.orig.replace(IGNORED_CHARACTERS, '');
          const origNoPunctuationLen = origNoPunctuation.length;
          if (startsWithAt(vertex.orig, answerNoSpaces, currPos, false)) {
            stack.push([vertex.to, currPos + origLen, { ...currVisited, [vertex.to]: null }]);
          // eslint-disable-next-line max-len
          } else if (startsWithAt(origNoPunctuation, answerNoSpaces, currPos, false)) {
            // eslint-disable-next-line max-len
            stack.push([vertex.to, currPos + origNoPunctuationLen, { ...currVisited, [vertex.to]: null }]);
          }
        }
      }
    });
  }

  return false;
}

function markMultipleChoice(challengeData) {
  const choices = Array.from(document.querySelectorAll(MULTIPLE_CHOICE_CHOICES));
  const choiceID = choices.findIndex((x) => x.tabIndex === 0);
  return choiceID === challengeData.correctIndex;
}

function markSubmission(challengeData) {
  switch (challengeData.type) {
    case 'assist':
    case 'definition':
    case 'dialogue':
    case 'form':
    case 'gapFill':
    case 'listenIsolation':
    case 'readComprehension':
    case 'select':
    case 'selectTranscription':
      return markMultipleChoice(challengeData);

    case 'completeReverseTranslation': {
      let answer = document.querySelector(TRANSLATE_TEXTBOX)?.value;
      if (answer === undefined) {
        // eslint-disable-next-line max-len
        const textbox = Array.from(document.querySelector(COMPLETEREVERSETRANSLATION_TEXTBOX).children);
        const answerArray = textbox.map((element) => {
          const blank = element.querySelector(COMPLETEREVERSETRANSLATION_BLANK);
          return blank?.value || element.textContent;
        });
        answer = answerArray.join('');
      }
      return markTranslate(answer, challengeData.grader.vertices);
    }

    case 'judge': {
      const choices = Array.from(document.querySelectorAll(MULTIPLE_CHOICE_CHOICES));
      const choiceID = choices.findIndex((x) => x.tabIndex === 0);
      return choiceID === challengeData.correctIndices[0];
    }

    case 'listenComplete': {
      const answerArea = document.querySelector(LISTENCOMPLETE_TEXTBOX);
      const answer = Array.from(answerArea.children).map((span) => {
        const blank = span.querySelector(LISTENCOMPLETE_BLANK);
        return blank?.getAttribute('value') ?? span.innerText;
      }).join('');
      return markTranslate(answer, challengeData.grader.vertices);
    }

    case 'name': {
      const textBox = document.querySelector(NAME_TEXTBOX);
      const buttonArray = Array.from(document.querySelectorAll(NAME_BUTTON));
      let answer;
      if (buttonArray.length > 0) {
        const button = buttonArray.find((x) => x.className === NAME_BUTTON_SELECTED);
        const buttonText = button.querySelector(NAME_BUTTON_TEXT).innerHTML;
        answer = `${buttonText} ${textBox.value}`;
      } else {
        answer = textBox.value;
      }
      return markTranslate(answer, challengeData.grader.vertices);
    }

    case 'partialReverseTranslate': {
      const textbox = document.querySelector(PARTIALREVERSETRANSLATE_TEXTBOX);
      const answerArray = Array.from(textbox.querySelectorAll(PARTIALREVERSETRANSLATE_TEXT));
      const answer = answerArray.map((x) => x.textContent).join('');
      return markTranslate(answer, challengeData.grader.vertices);
    }

    case 'tapCloze': {
      const chosenButton = document.querySelector(TAPCLOZE_SELECTED);
      const chosenButtonText = chosenButton.querySelector(TAPCLOZE_BUTTON_TEXT).textContent;
      const correctChoice = challengeData.correctIndices[0];
      return chosenButtonText === challengeData.choices[correctChoice];
    }

    case 'tapComplete': {
      const selectionArray = Array.from(document.querySelectorAll(TAPCOMPLETE_SELECTED));
      const selectionText = selectionArray.map((button) => button.querySelector(TAPCOMPLETE_SELECTED_TEXT).textContent).join(' ');
      const displayTokens = Array.from(challengeData.displayTokens);
      return selectionText === displayTokens.filter((x) => x.isBlank).map((x) => x.text).join(' ');
    }

    case 'tapCompleteTable': {
      const choiceArray = Array.from(document.querySelectorAll(TAPCOMPLETETABLE_CHOICES));
      // eslint-disable-next-line max-len
      const choices = choiceArray.map((x) => x.querySelector(TAPCOMPLETETABLE_CHOICE_TEXT).textContent).join();
      const valueArray = [];
      const tokens = challengeData.displayTokens.slice(1);
      tokens.forEach((token) => {
        const [_, translation] = token;

        translation.forEach((x) => {
          if (x.isBlank) {
            valueArray.push(x.text);
          }
        });
      });
      return choices === valueArray.join();
    }

    case 'listen':
    case 'translate': {
      let answer = document.querySelector(TRANSLATE_TEXTBOX)?.value;
      let identicalToCorrectTokens = true;
      if (answer === undefined) {
        const answerArea = document.querySelector(SPEAK_ANSWER_AREA);
        const selectionArray = Array.from(answerArea.childNodes).map((div) => div.getElementsByTagName('button')[0]);
        const selectionArrayText = selectionArray.map((button) => button.innerText);
        // eslint-disable-next-line prefer-destructuring
        const correctTokens = challengeData.correctTokens;
        if (selectionArrayText.length === correctTokens.length) {
          for (let i = 0; i < selectionArrayText.length; ++i) {
            if (selectionArrayText[i] !== correctTokens[i]) {
              identicalToCorrectTokens = false;
              break;
            }
          }
        } else {
          identicalToCorrectTokens = false;
        }
        answer = selectionArrayText.join(' ');
      } else {
        identicalToCorrectTokens = false;
      }

      return identicalToCorrectTokens ? true : markTranslate(answer, challengeData.grader.vertices);
    }

    case 'typeCloze': {
      const blank = document.querySelector(TYPECLOZE_BLANK);
      const correctAnswer = blank.querySelector(TYPECLOZE_CORRECT).textContent.replace(/_/g, '');
      const submission = blank.querySelector(TYPECLOZE_SUBMISSION).value.replace(IGNORED_CHARACTERS, '');
      return correctAnswer.toLowerCase() === submission.toLowerCase();
    }

    case 'typeCompleteTable': {
      const blanks = Array.from(document.querySelectorAll(TYPECOMPLETETABLE_BLANKS));
      return blanks.every((blank) => {
        const correctAnswer = blank.querySelector(TYPECOMPLETETABLE_ANSWER).textContent.replace(IGNORED_CHARACTERS, '');
        const submission = blank.querySelector(TYPECOMPLETETABLE_SUBMISSION).value;
        return correctAnswer.toLowerCase() === submission.toLowerCase().trim();
      });
    }

    default:
      return false;
  }
}

function markMatch(challengeData, word1, word2) {
  if (word1 === word2) {
    return true;
  }
  return Object.values(challengeData.pairs).some((pair) => (word1 === pair.learningToken && word2 === pair.fromToken)
  || (word2 === pair.learningToken && word1 === pair.fromToken));
}

/* eslint-disable max-len */

newConsole.log('Adding lesson listeners');

function getChallengeDataLesson() {
  const solution = document.querySelector('.mQ0GW');
  if (solution === null) {
    return null;
  }
  return getReactFiber(solution).return.return.stateNode.props.currentChallenge;
}

function checkSubmission(submissionButton) {
  // If the button is "Check" then do not propagate the keypress.
  if (submissionButton?.querySelector(SUBMISSION_BUTTON_SPAN)?.innerHTML !== 'Check') {
    return true;
  }

  const challengeData = getChallengeDataLesson();
  newConsole.log(challengeData);
  newConsole.log(challengeData.type);

  return markSubmission(challengeData);
}

// Check user submission whenever the Enter key is pressed
document.addEventListener(
  'keydown',
  (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    const submissionButton = document.querySelector(SUBMISSION_BUTTON_LESSON);
    if (submissionButton === null) {
      return;
    }

    if (!checkSubmission(submissionButton)) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  },
);

function addMatchListener(challengeData, button) {
  button.addEventListener('click', (e) => {
    const previouslyClicked = document.querySelector(MATCH_BUTTON_SELECTED);
    if (!previouslyClicked) {
      return;
    }

    const previousText = previouslyClicked.querySelector(MATCH_BUTTON_TEXT).textContent;
    const currentButton = button.textContent;
    const currentText = currentButton.slice(1);

    if (!markMatch(challengeData, previousText, currentText)) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  });
}

function addListenMatchListener(button) {
  button.addEventListener('click', (e) => {
    const previouslyClicked = document.querySelector(MATCH_BUTTON_SELECTED);
    if (!previouslyClicked) {
      return;
    }

    const currClicked = button.getElementsByTagName('button')[0];
    const prevIsSound = previouslyClicked.querySelector(LISTENMATCH_SOUNDWAVE) !== null;
    const currIsSound = currClicked.querySelector(LISTENMATCH_SOUNDWAVE) !== null;
    if (prevIsSound === currIsSound) {
      return;
    }

    const previousText = previouslyClicked.getAttribute('data-test');
    const currentText = currClicked.getAttribute('data-test');

    if (previousText !== currentText) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  });
}

const observerMatch = new MutationObserver(() => {
  const challengeData = getChallengeDataLesson();
  if (challengeData?.type === 'match') {
    const matchButtons = document.querySelectorAll(MATCH_BUTTONS);
    matchButtons.forEach((x) => addMatchListener(challengeData, x));
  } else if (challengeData?.type === 'listenMatch') {
    const listenMatchButtons = document.querySelectorAll(MATCH_BUTTONS);
    listenMatchButtons.forEach((x) => addListenMatchListener(x));
  }
});

observerMatch.observe(document.body, { childList: true, subtree: true });
