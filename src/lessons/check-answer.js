/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import * as constants from './challenge-type-constants.js';

const accentMap = JSON.parse('{"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","×":"x","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","÷":"/","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Ĉ":"C","ĉ":"c","Ċ":"C","ċ":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"D","đ":"d","Ē":"E","ē":"e","Ĕ":"E","ĕ":"e","Ė":"E","ė":"e","Ę":"E","ę":"e","Ě":"E","ě":"e","Ĝ":"G","ĝ":"g","Ğ":"G","ğ":"g","Ġ":"G","ġ":"g","Ģ":"G","ģ":"g","Ĥ":"H","ĥ":"h","Ħ":"H","ħ":"h","Ĩ":"I","ĩ":"i","Ī":"I","ī":"i","Ĭ":"I","ĭ":"i","Į":"I","į":"i","İ":"I","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","ĺ":"l","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ŀ":"L","ŀ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ŏ":"O","ŏ":"o","Ő":"O","ő":"o","Ŕ":"R","ŕ":"r","Ŗ":"R","ŗ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ŝ":"S","ŝ":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ŧ":"T","ŧ":"t","Ũ":"U","ũ":"u","Ū":"U","ū":"u","Ŭ":"U","ŭ":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ơ":"O","ơ":"o","Ư":"U","ư":"u","Ș":"S","ș":"s","Ț":"T","ț":"t","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ό":"Ο","Ύ":"Υ","Ώ":"Ω","ΐ":"ι","Ϊ":"Ι","Ϋ":"Υ","ά":"α","έ":"ε","ή":"η","ί":"ι","ΰ":"υ","ϊ":"ι","ϋ":"υ","ό":"ο","ύ":"υ","ώ":"ω","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y"}');

const startsWithAt = (target, candidate, startPos) => {
  const targetLen = target.length;
  const candidateLen = candidate.length;
  if (candidateLen - startPos < targetLen) {
    return false;
  }

  for (let i = 0; i < targetLen; ++i) {
    const targetLetter = target[i];
    const candidateLetter = candidate[startPos + i];

    const targetLetterUpper = targetLetter.toUpperCase();
    const candidateLetterUpper = candidateLetter.toUpperCase();

    const targetLetterLenient = accentMap[targetLetterUpper] ?? targetLetterUpper;
    const candidateLetterLenient = accentMap[candidateLetterUpper] ?? candidateLetterUpper;

    if (targetLetterLenient !== candidateLetterLenient) {
      return false;
    }
  }

  return true;
};

const markTranslate = (answer, vertices) => {
  const answerNoSpaces = answer.replace(constants.IGNORED_CHARACTERS, '');
  const destinationVertexId = vertices.length - 1;
  const lastPos = answerNoSpaces.length;
  const stack = [[0, 0]];

  while (stack.length) {
    const [currVertexId, currPos] = stack.pop();

    if (currVertexId === destinationVertexId && currPos >= lastPos) {
      return true;
    }

    vertices[currVertexId].forEach((vertex) => {
      const lenientLen = vertex.lenient.length;

      if (!vertex.lenient.trim().length) {
        stack.push([vertex.to, currPos]);
      } else if (startsWithAt(vertex.lenient, answerNoSpaces, currPos)) {
        stack.push([vertex.to, currPos + lenientLen]);
      } else if (vertex.orig) {
        const origLen = vertex.orig.length;
        const origNoPunctuation = vertex.orig.replace(constants.IGNORED_CHARACTERS, '');
        const origNoPunctuationLen = origNoPunctuation.length;

        if (startsWithAt(vertex.orig, answerNoSpaces, currPos)) {
          stack.push([vertex.to, currPos + origLen]);
        } else if (startsWithAt(origNoPunctuation, answerNoSpaces, currPos)) {
          stack.push([vertex.to, currPos + origNoPunctuationLen]);
        }
      }
    });
  }

  return false;
};

const markMultipleChoice = (challengeData) => {
  const choices = Array.from(document.querySelectorAll(constants.MULTIPLE_CHOICE_CHOICES));
  const selectedIndex = choices.findIndex((x) => x.tabIndex === 0);
  return selectedIndex === challengeData.correctIndex;
};

export const markSubmission = (challengeData) => {
  switch (challengeData.type) {
    case 'assist':
    case 'definition':
    case 'dialogue':
    case 'form':
    case 'gapFill':
    case 'listenComprehension':
    case 'listenIsolation':
    case 'readComprehension':
    case 'select':
    case 'selectTranscription':
      return markMultipleChoice(challengeData);

    case 'completeReverseTranslation': {
      let answer = document.querySelector(constants.TRANSLATE_TEXTBOX)?.value;
      if (answer === undefined) {
        const textbox = Array.from(document.querySelector(constants.COMPLETEREVERSETRANSLATION_TEXTBOX).children);
        const answerArray = textbox.map((element) => {
          const blank = element.querySelector(constants.COMPLETEREVERSETRANSLATION_BLANK);
          return blank?.value || element.textContent;
        });
        answer = answerArray.join('');
      }
      return markTranslate(answer, challengeData.grader.vertices);
    }

    case 'judge': {
      const choices = Array.from(document.querySelectorAll(constants.MULTIPLE_CHOICE_CHOICES));
      const selectedIndex = choices.findIndex((x) => x.tabIndex === 0);
      return selectedIndex === challengeData.correctIndices[0];
    }

    case 'listenComplete': {
      const answerArea = document.querySelector(constants.LISTENCOMPLETE_TEXTBOX);
      const answer = Array.from(answerArea.children).map((span) => {
        const blank = span.querySelector(constants.LISTENCOMPLETE_BLANK);
        return blank?.getAttribute('value') ?? span.innerText;
      }).join('');
      return markTranslate(answer, challengeData.grader.vertices);
    }

    case 'name': {
      const textBox = document.querySelector(constants.NAME_TEXTBOX);
      const buttonArray = Array.from(document.querySelectorAll(constants.NAME_BUTTON));
      let answer;
      if (buttonArray.length) {
        const button = buttonArray.find((x) => x.className === constants.NAME_BUTTON_SELECTED);
        const buttonText = button.querySelector(constants.NAME_BUTTON_TEXT).innerText;
        answer = `${buttonText} ${textBox.value}`;
      } else {
        answer = textBox.value;
      }
      return markTranslate(answer, challengeData.grader.vertices);
    }

    case 'partialReverseTranslate': {
      const answerArray = Array.from(document.querySelectorAll(constants.PARTIALREVERSETRANSLATE_ANSWER_ARRAY));
      const answer = answerArray.map((x) => x.textContent).join('');
      return markTranslate(answer, challengeData.grader.vertices);
    }

    case 'tapCloze': {
      const chosenButtonText = document.querySelector(constants.TAPCLOZE_CHOSEN_BUTTON_TEXT).textContent;
      const correctChoice = challengeData.correctIndices[0];
      return chosenButtonText === challengeData.choices[correctChoice];
    }

    case 'tapComplete': {
      const selectionArray = Array.from(document.querySelectorAll(constants.TAPCOMPLETE_SELECTION_ARRAY));
      const selectionText = selectionArray.map((button) => button.innerText).join(' ');
      const displayTokens = Array.from(challengeData.displayTokens);
      return selectionText === displayTokens.filter((x) => x.isBlank).map((x) => x.text).join(' ');
    }

    case 'tapCompleteTable': {
      const choiceArray = Array.from(document.querySelectorAll(constants.TAPCOMPLETE_SELECTION_ARRAY));
      const choices = choiceArray.map((x) => x.textContent).join();
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
    case 'listenTap':
    case 'translate': {
      let answer = document.querySelector(constants.TRANSLATE_TEXTBOX)?.value;
      let identicalToCorrectTokens = true;
      if (answer === undefined) {
        const dirArray = Array.from(document.querySelectorAll(constants.SPEAK_ANSWER_AREA));
        const answerArea = dirArray.at(-1);
        const selectionArray = Array.from(answerArea.querySelectorAll('button'));
        const selectionArrayText = selectionArray.map((button) => button.innerText);
        const { correctTokens } = challengeData;

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
      const blank = document.querySelector(constants.TYPECLOZE_BLANK);
      const correctAnswer = blank.querySelector(constants.TYPECLOZE_CORRECT).textContent.replace(/_/g, '');
      const submission = blank.querySelector(constants.TYPECLOZE_SUBMISSION).value.replace(constants.IGNORED_CHARACTERS, '');
      return correctAnswer.toLowerCase() === submission.toLowerCase();
    }

    case 'typeCompleteTable': {
      const blanks = Array.from(document.querySelectorAll(constants.TYPECOMPLETETABLE_BLANKS));
      return blanks.every((blank) => {
        const correctAnswer = blank.querySelector(constants.TYPECOMPLETETABLE_ANSWER).textContent.replace(constants.IGNORED_CHARACTERS, '');
        const submission = blank.querySelector(constants.TYPECOMPLETETABLE_SUBMISSION).value;
        return correctAnswer.toLowerCase() === submission.toLowerCase().trim();
      });
    }

    default:
      return false;
  }
};

export const markMatch = (challengeData, word1, word2) => (word1 === word2
  ? true
  : Object.values(challengeData.pairs).some((pair) => (word1 === pair.learningToken && word2 === pair.fromToken)
      || (word2 === pair.learningToken && word1 === pair.fromToken)));
