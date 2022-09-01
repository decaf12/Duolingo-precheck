import { TSMap } from 'typescript-map';
import * as constants from './challengeTypeConstants';

const accentMap = JSON.parse('{"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","×":"x","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","÷":"/","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Ĉ":"C","ĉ":"c","Ċ":"C","ċ":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"D","đ":"d","Ē":"E","ē":"e","Ĕ":"E","ĕ":"e","Ė":"E","ė":"e","Ę":"E","ę":"e","Ě":"E","ě":"e","Ĝ":"G","ĝ":"g","Ğ":"G","ğ":"g","Ġ":"G","ġ":"g","Ģ":"G","ģ":"g","Ĥ":"H","ĥ":"h","Ħ":"H","ħ":"h","Ĩ":"I","ĩ":"i","Ī":"I","ī":"i","Ĭ":"I","ĭ":"i","Į":"I","į":"i","İ":"I","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","ĺ":"l","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ŀ":"L","ŀ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ŏ":"O","ŏ":"o","Ő":"O","ő":"o","Ŕ":"R","ŕ":"r","Ŗ":"R","ŗ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ŝ":"S","ŝ":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ŧ":"T","ŧ":"t","Ũ":"U","ũ":"u","Ū":"U","ū":"u","Ŭ":"U","ŭ":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ơ":"O","ơ":"o","Ư":"U","ư":"u","Ș":"S","ș":"s","Ț":"T","ț":"t","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ό":"Ο","Ύ":"Υ","Ώ":"Ω","ΐ":"ι","Ϊ":"Ι","Ϋ":"Υ","ά":"α","έ":"ε","ή":"η","ί":"ι","ΰ":"υ","ϊ":"ι","ϋ":"υ","ό":"ο","ύ":"υ","ώ":"ω","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y"}');

function trimIgnored(word) {
  const length = word.length;

  for (let i = length - 1; i >= 0; i--) {
    const letter = word[i];
    if (constants.IGNORED_CHARACTERS_STR.indexOf(letter) === -1) {
      return word.slice(0, i + 1);
    }
  }

  return '';
}
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

export function addToKey(answerKey, challenges) {
  challenges.forEach((challenge) => {
    let challengePrompt;
    let value;

    if ('grader' in challenge) {
      answerKey.set(`${challenge.prompt}: ${constants.TYPE_TRANSLATE}`, challenge.grader.vertices);
      console.log(`Translate prompt loaded: ${challenge.prompt}`);
    }

    if (challenge.type !== constants.TYPE_TRANSLATE) {
      switch (challenge.type) {
        case constants.TYPE_ASSIST: {
          challengePrompt = `How do you say "${challenge.prompt}"?`;
          value = challenge.correctIndex;
          break;
        }

        case constants.TYPE_DEFINITION: {
          challengePrompt = `What does ${challenge.phraseToDefine} mean?`;
          console.log(`Definition prompt loaded: ${challengePrompt}`);
          console.log(`Definition choice loaded: ${value}`);
          break;
        }

        case constants.TYPE_DIALOGUE: {
          challengePrompt = challenge.choices;
          value = challenge.correctIndex;
          console.log(`Dialogue prompt loaded: ${challengePrompt}`);
          console.log(`Dialogue choice loaded: ${value}`);
          break;
        }

        case constants.TYPE_FORM: {
          challengePrompt = challenge.promptPieces.join('');
          value = challenge.correctIndex;
          break;
        }

        case constants.TYPE_GAPFILL: {
          challengePrompt = challenge.displayTokens.map((x) => (x.isBlank ? '' : x.text)).join('');
          value = challenge.correctIndex;
          break;
        }

        case constants.TYPE_MATCH: {
          challengePrompt = challenge.pairs.map((x) => x.learningToken).sort().join(' ');
          value = new TSMap();
          challenge.pairs.forEach((x) => {
            value.set(x.learningToken, x.fromToken);
          });
          break;
        }

        case constants.TYPE_JUDGE: {
          challengePrompt = challenge.prompt;
          // eslint-disable-next-line prefer-destructuring
          value = challenge.correctIndices[0];
          break;
        }

        case constants.TYPE_READCOMPREHENSION: {
          challengePrompt = `${challenge.passage}${challenge.question}`;
          console.log(`Prompt loaded: ${challengePrompt}`);
          value = challenge.correctIndex;
          break;
        }
        case constants.TYPE_SELECT: {
          challengePrompt = `Which one of these is \u201C${challenge.prompt}\u201D?`; /* u201C and u201D are curly quotes */
          value = challenge.correctIndex;
          break;
        }

        case constants.TYPE_TAPCLOZE: {
          const displayTokens = Array.from(challenge.displayTokens);
          const promptArray = displayTokens.filter((x) => !('damageStart' in x));
          challengePrompt = promptArray.map((x) => x.text).join('');
          const correctChoice = challenge.correctIndices[0];
          value = challenge.choices[correctChoice];
          break;
        }

        case constants.TYPE_TAPCOMPLETE: {
          const displayTokens = Array.from(challenge.displayTokens);
          const promptArray = displayTokens.filter((x) => !x.isBlank && x.text !== ' ');
          challengePrompt = promptArray.map((x) => x.text).join(' ');
          value = displayTokens.filter((x) => x.isBlank).map((x) => x.text).join(' ');;
          break;
        }

        case constants.TYPE_TAPCOMPLETETABLE: {
          const tokens = challenge.displayTokens.slice(1);
          const promptArray = [];
          const valueArray = [];
          tokens.forEach((token) => {
            const [orig, translation] = token;

            orig.forEach((x) => {
              if (/^[A-Za-z]+$/.test(x.text)) {
                promptArray.push(x.text);
              }
            });

            translation.forEach((x) => {
              if (x.isBlank) {
                valueArray.push(x.text);
              } else {
                promptArray.push(x.text);
              }
            });
          });
          challengePrompt = promptArray.sort().join();
          value = valueArray.join();
          break;
        }

        default: {
          challengePrompt = null;
          value = null;
        }
      }
      answerKey.set(`${challengePrompt}: ${challenge.type}`, value);
    }
  });
}

export function gradeTranslation(answer, vertices) {
  const answerNoSpaces = answer.replace(constants.IGNORED_CHARACTERS, '');
  console.log(`answerNoSpaces: ${answerNoSpaces}`);
  const lastVertexID = vertices.length - 1;
  const lastPos = answerNoSpaces.length;
  const stack = [[0, 0, { 0: null }]];

  while (stack.length > 0) {
    const [currVertexID, currPos, currVisited] = stack.pop();

    if (currVertexID === lastVertexID && currPos >= lastPos) {
      return true;
    }

    console.log(`Current vertex: ${currVertexID}`);

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
          const origNoPunctuation = vertex.orig.replace(constants.IGNORED_CHARACTERS, '');
          const origNoPunctuationLen = origNoPunctuation.length;
          console.log(`Orig no punctuation: ${origNoPunctuation}`);
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

export function checkAnswer(answerKey, answer, challengePrompt, challengeType) {
  if (challengePrompt === constants.SKIP_CHECKING_TRUE) {
    return true;
  }

  if (challengePrompt === constants.SKIP_CHECKING_FALSE) {
    return false;
  }

  const key = `${challengePrompt}: ${challengeType}`;

  if (challengeType === constants.TYPE_TRANSLATE) {
    const vertices = answerKey.get(key);
    return gradeTranslation(answer, vertices);
  }

  if (challengeType === constants.TYPE_MATCH) {
    const matchLookup = answerKey.get(key);
    if (matchLookup.has(answer.previousText) && matchLookup.has(answer.currentText)) {
      return true;
    }

    if (!matchLookup.has(answer.previousText) && !matchLookup.has(answer.currentText)) {
      return true;
    }

    if (matchLookup.has(answer.previousText)) {
      return answer.currentText === matchLookup.get(answer.previousText);
    }
    return answer.previousText === matchLookup.get(answer.currentText);
  }

  const correctAnswer = answerKey.get(key);
  return answer === correctAnswer;
}
