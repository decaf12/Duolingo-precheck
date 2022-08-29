import { CHALLENGE_URL_PATTERN, CHECKPOINT_URL_PATTERN, CHALLENGE_URL_FRONTEND_PATTERN } from './constants.js';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var typescriptMap = {};

var __spreadArrays = (commonjsGlobal && commonjsGlobal.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(typescriptMap, "__esModule", { value: true });
var TSMap_1 = typescriptMap.TSMap = void 0;
var TSMap = /** @class */ (function () {
    function TSMap(inputMap) {
        var t = this;
        t._keys = [];
        t._values = [];
        t.length = 0;
        if (inputMap) {
            inputMap.forEach(function (v, k) {
                t.set(v[0], v[1]);
            });
        }
    }
    /**
     * Convert a JSON object to a map.
     *
     * @param {*} jsonObject JSON object to convert
     * @param {boolean} [convertObjs] convert nested objects to maps
     * @returns {TSMap<K, V>}
     * @memberof TSMap
     */
    TSMap.prototype.fromJSON = function (jsonObject, convertObjs) {
        var t = this;
        var setProperty = function (value) {
            if (value !== null && typeof value === 'object' && convertObjs)
                return new TSMap().fromJSON(value, true);
            if (Array.isArray(value) && convertObjs)
                return value.map(function (v) { return setProperty(v); });
            return value;
        };
        Object.keys(jsonObject).forEach(function (property) {
            if (jsonObject.hasOwnProperty(property)) {
                t.set(property, setProperty(jsonObject[property]));
            }
        });
        return t;
    };
    /**
     * Outputs the contents of the map to a JSON object
     *
     * @returns {{[key: string]: V}}
     * @memberof TSMap
     */
    TSMap.prototype.toJSON = function () {
        var obj = {};
        var t = this;
        var getValue = function (value) {
            if (value instanceof TSMap) {
                return value.toJSON();
            }
            else if (Array.isArray(value)) {
                return value.map(function (v) { return getValue(v); });
            }
            else {
                return value;
            }
        };
        t.keys().forEach(function (k) {
            obj[String(k)] = getValue(t.get(k));
        });
        return obj;
    };
    /**
     * Get an array of arrays respresenting the map, kind of like an export function.
     *
     * @returns {(Array<Array<K|V>>)}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.entries = function () {
        var _this = this;
        return [].slice.call(this.keys().map(function (k) { return [k, _this.get(k)]; }));
    };
    /**
     * Get an array of keys in the map.
     *
     * @returns {Array<K>}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.keys = function () {
        return [].slice.call(this._keys);
    };
    /**
     * Get an array of the values in the map.
     *
     * @returns {Array<V>}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.values = function () {
        return [].slice.call(this._values);
    };
    /**
     * Check to see if an item in the map exists given it's key.
     *
     * @param {K} key
     * @returns {Boolean}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.has = function (key) {
        return this._keys.indexOf(key) > -1;
    };
    /**
     * Get a specific item from the map given it's key.
     *
     * @param {K} key
     * @returns {V}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.get = function (key) {
        var i = this._keys.indexOf(key);
        return i > -1 ? this._values[i] : undefined;
    };
    /**
     * Safely retrieve a deeply nested property.
     *
     * @param {K[]} path
     * @returns {V}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.deepGet = function (path) {
        if (!path || !path.length)
            return null;
        var recursiveGet = function (obj, path) {
            if (obj === undefined || obj === null)
                return null;
            if (!path.length)
                return obj;
            return recursiveGet(obj instanceof TSMap ? obj.get(path[0]) : obj[path[0]], path.slice(1));
        };
        return recursiveGet(this.get(path[0]), path.slice(1));
    };
    /**
     * Set a specific item in the map given it's key, automatically adds new items as needed.
     * Ovewrrites existing items
     *
     * @param {K} key
     * @param {V} value
     *
     * @memberOf TSMap
     */
    TSMap.prototype.set = function (key, value) {
        var t = this;
        // check if key exists and overwrite
        var i = this._keys.indexOf(key);
        if (i > -1) {
            t._values[i] = value;
        }
        else {
            t._keys.push(key);
            t._values.push(value);
            t.length = t._values.length;
        }
        return this;
    };
    /**
     * Enters a value into the map forcing the keys to always be sorted.
     * Stolen from https://machinesaredigging.com/2014/04/27/binary-insert-how-to-keep-an-array-sorted-as-you-insert-data-in-it/
     * Best case speed is O(1), worse case is O(N).
     *
     * @param {K} key
     * @param {V} value
     * @param {number} [startVal]
     * @param {number} [endVal]
     * @returns {this}
     * @memberof TSMap
     */
    TSMap.prototype.sortedSet = function (key, value, startVal, endVal) {
        var t = this;
        var length = this._keys.length;
        var start = startVal || 0;
        var end = endVal !== undefined ? endVal : length - 1;
        if (length == 0) {
            t._keys.push(key);
            t._values.push(value);
            return t;
        }
        if (key == this._keys[start]) {
            this._values[start] = value;
            return this;
        }
        if (key == this._keys[end]) {
            this._values[end] = value;
            return this;
        }
        if (key > this._keys[end]) {
            this._keys.splice(end + 1, 0, key);
            this._values.splice(end + 1, 0, value);
            return this;
        }
        if (key < this._keys[start]) {
            this._values.splice(start, 0, value);
            this._keys.splice(start, 0, key);
            return this;
        }
        if (start >= end) {
            return this;
        }
        var m = start + Math.floor((end - start) / 2);
        if (key < this._keys[m]) {
            return this.sortedSet(key, value, start, m - 1);
        }
        if (key > this._keys[m]) {
            return this.sortedSet(key, value, m + 1, end);
        }
        return this;
    };
    /**
     * Provide a number representing the number of items in the map
     *
     * @returns {number}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.size = function () {
        return this.length;
    };
    /**
     * Clear all the contents of the map
     *
     * @returns {TSMap<K,V>}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.clear = function () {
        var t = this;
        t._keys.length = t.length = t._values.length = 0;
        return this;
    };
    /**
     * Delete an item from the map given it's key
     *
     * @param {K} key
     * @returns {Boolean}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.delete = function (key) {
        var t = this;
        var i = t._keys.indexOf(key);
        if (i > -1) {
            t._keys.splice(i, 1);
            t._values.splice(i, 1);
            t.length = t._keys.length;
            return true;
        }
        return false;
    };
    /**
     * Used to loop through the map.
     *
     * @param {(value:V,key?:K,index?:number) => void} callbackfn
     *
     * @memberOf TSMap
     */
    TSMap.prototype.forEach = function (callbackfn) {
        var _this = this;
        this._keys.forEach(function (v, i) {
            callbackfn(_this.get(v), v, i);
        });
    };
    /**
     * Returns an array containing the returned value of each item in the map.
     *
     * @param {(value:V,key?:K,index?:number) => any} callbackfn
     * @returns {Array<any>}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.map = function (callbackfn) {
        var _this = this;
        return this.keys().map(function (itemKey, i) {
            return callbackfn(_this.get(itemKey), itemKey, i);
        });
    };
    /**
     * Removes items based on a conditional function passed to filter.
     * Mutates the map in place.
     *
     * @param {(value:V,key?:K,index?:number) => Boolean} callbackfn
     * @returns {TSMap<K,V>}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.filter = function (callbackfn) {
        var t = this;
        __spreadArrays(t._keys).forEach(function (v, i) {
            if (callbackfn(t.get(v), v, i) === false)
                t.delete(v);
        });
        return this;
    };
    /**
     * Creates a deep copy of the map, breaking all references to the old map and it's children.
     * Uses JSON.parse so any functions will be stringified and lose their original purpose.
     *
     * @returns {TSMap<K,V>}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.clone = function () {
        return new TSMap(this.entries());
    };
    return TSMap;
}());
TSMap_1 = typescriptMap.TSMap = TSMap;

const SKIP_CHECKING_TRUE = 'skip checking: true';
const SKIP_CHECKING_FALSE = 'skip checking: false';

const IGNORED_CHARACTERS = /[_'\-\s,.?!;]/g;

const TYPE_ASSIST = 'assist';

const TYPE_DEFINITION = 'definition';

const TYPE_DIALOGUE = 'dialogue';

const TYPE_FORM = 'form';

const TYPE_GAPFILL = 'gapFill';

const TYPE_JUDGE = 'judge';

const TYPE_MATCH = 'match';

const TYPE_READCOMPREHENSION = 'readComprehension';

const TYPE_SELECT = 'select';

const TYPE_TAPCLOZE = 'tapCloze';

const TYPE_TAPCOMPLETE = 'tapComplete';

const TYPE_TAPCOMPLETETABLE = 'tapCompleteTable';

const TYPE_TRANSLATE = 'translate';

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

function addToKey(answerKey, challenges) {
  challenges.forEach((challenge) => {
    let challengePrompt;
    let value;

    if ('grader' in challenge) {
      answerKey.set(`${challenge.prompt}: ${TYPE_TRANSLATE}`, challenge.grader.vertices);
      console.log(`Translate prompt loaded: ${challenge.prompt}`);
    }

    if (challenge.type !== TYPE_TRANSLATE) {
      switch (challenge.type) {
        case TYPE_ASSIST: {
          challengePrompt = `How do you say "${challenge.prompt}"?`;
          value = challenge.correctIndex;
          break;
        }

        case TYPE_DEFINITION: {
          challengePrompt = `What does \u0022${challenge.phraseToDefine}\u0022 mean?`; /* u0022 is the stright quotation mark */
          value = challenge.correctIndex;
          console.log(`Definition prompt loaded: ${challengePrompt}`);
          console.log(`Definition choice loaded: ${value}`);
          break;
        }

        case TYPE_DIALOGUE: {
          challengePrompt = challenge.choices;
          value = challenge.correctIndex;
          console.log(`Dialogue prompt loaded: ${challengePrompt}`);
          console.log(`Dialogue choice loaded: ${value}`);
          break;
        }

        case TYPE_FORM: {
          challengePrompt = challenge.promptPieces.join('');
          value = challenge.correctIndex;
          break;
        }

        case TYPE_GAPFILL: {
          challengePrompt = challenge.displayTokens.map((x) => (x.isBlank ? '' : x.text)).join('');
          value = challenge.correctIndex;
          break;
        }

        case TYPE_MATCH: {
          challengePrompt = challenge.pairs.map((x) => x.learningToken).sort().join(' ');
          value = new TSMap_1();
          challenge.pairs.forEach((x) => {
            value.set(x.learningToken, x.fromToken);
          });
          break;
        }

        case TYPE_JUDGE: {
          challengePrompt = challenge.prompt;
          // eslint-disable-next-line prefer-destructuring
          value = challenge.correctIndices[0];
          break;
        }

        case TYPE_READCOMPREHENSION: {
          challengePrompt = `${challenge.passage}${challenge.question}`;
          console.log(`Prompt loaded: ${challengePrompt}`);
          value = challenge.correctIndex;
          break;
        }
        case TYPE_SELECT: {
          challengePrompt = `Which one of these is \u201C${challenge.prompt}\u201D?`; /* u201C and u201D are curly quotes */
          value = challenge.correctIndex;
          break;
        }

        case TYPE_TAPCLOZE: {
          const displayTokens = Array.from(challenge.displayTokens);
          const promptArray = displayTokens.filter((x) => !('damageStart' in x));
          challengePrompt = promptArray.map((x) => x.text).join('');
          const correctChoice = challenge.correctIndices[0];
          value = challenge.choices[correctChoice];
          break;
        }

        case TYPE_TAPCOMPLETE: {
          const displayTokens = Array.from(challenge.displayTokens);
          const promptArray = displayTokens.filter((x) => !x.isBlank && x.text !== ' ');
          challengePrompt = promptArray.map((x) => x.text).join(' ');
          value = displayTokens.filter((x) => x.isBlank).map((x) => x.text).join(' ');          break;
        }

        case TYPE_TAPCOMPLETETABLE: {
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

function gradeTranslation(answer, vertices) {
  const answerNoSpaces = answer.replace(IGNORED_CHARACTERS, '');
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
          const origNoPunctuation = vertex.orig.replace(IGNORED_CHARACTERS, '');
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

function checkAnswer(answerKey, answer, challengePrompt, challengeType) {
  if (challengePrompt === SKIP_CHECKING_TRUE) {
    return true;
  }

  if (challengePrompt === SKIP_CHECKING_FALSE) {
    return false;
  }

  const key = `${challengePrompt}: ${challengeType}`;

  if (challengeType === TYPE_TRANSLATE) {
    const vertices = answerKey.get(key);
    return gradeTranslation(answer, vertices);
  }

  if (challengeType === TYPE_MATCH) {
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

(function loadAnswerKey() {
  let answerkeyJSON;
  const answerKey = new TSMap_1();

  function getAnswerKey(details) {
    const filter = browser.webRequest.filterResponseData(details.requestId);

    filter.onstart = () => {
      answerkeyJSON = '';
      answerKey.clear();
    };

    filter.ondata = (event) => {
      const decoder = new TextDecoder('utf-8');
      answerkeyJSON += decoder.decode(event.data);
      filter.write(event.data);
    };

    filter.onstop = () => {
      const response = JSON.parse(answerkeyJSON);
      addToKey(answerKey, response.challenges);
      if ('adaptiveChallenges' in response) {
        addToKey(answerKey, response.adaptiveChallenges);
      }
      if ('adaptiveInterleavedChallenges' in response) {
        addToKey(answerKey, response.adaptiveInterleavedChallenges.challenges);
      }
      filter.disconnect();
    };
  }

  function handlemessage(req, sender, sendResponse) {
    // eslint-disable-next-line max-len
    const isCorrect = checkAnswer(answerKey, req.answer, req.challengePrompt, req.challengeType);
    sendResponse({ correct: isCorrect });
  }

  browser.webRequest.onHeadersReceived.addListener(
    getAnswerKey,
    { urls: [CHALLENGE_URL_PATTERN, CHECKPOINT_URL_PATTERN] },
    ['blocking'],
  );

  browser.runtime.onMessage.addListener(handlemessage);
}());

browser.tabs.onUpdated.addListener(
  () => {
    browser.tabs.executeScript(
      null,
      {
        file: '/content.js',
        runAt: 'document_end',
      },
    );
  },
  {
    urls: [CHALLENGE_URL_FRONTEND_PATTERN, CHECKPOINT_URL_PATTERN],
    properties: ['url'],
  },
);
