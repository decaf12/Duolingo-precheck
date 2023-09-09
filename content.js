const SUBMISSION_BUTTON = '[data-test="player-next"]';
const SUBMISSION_BUTTON_SPAN = '[class="_13HXc"]';
const SKIP_CHECKING_TRUE = 'skip checking: true';
const SKIP_CHECKING_FALSE = 'skip checking: false';

const IGNORED_CHARACTERS = /[_'\-\s,.?!;]/g;

const TYPE_ASSIST = 'assist';
const ASSIST = '[data-test="challenge challenge-assist"]';
const ASSIST_PROMPT = '[class="_1KUxv _11rtD"]';
const ASSIST_CHOICES = '[data-test="challenge-choice"]';
const COMPLETEREVERSETRANSLATION = '[data-test="challenge challenge-completeReverseTranslation"]';
const COMPLETEREVERSETRANSLATION_PROMPT = '[data-test="hint-token"]';
const COMPLETEREVERSETRANSLATION_TEXTBOX = '[class="_3f_Q3 _2FKqf _2ti2i"]';
const COMPLETEREVERSETRANSLATION_BLANK = '[data-test="challenge-text-input"]';

const TYPE_DEFINITION = 'definition';
const DEFINITION = '[data-test="challenge challenge-definition"]';
const DEFINITION_PROMPT = '[class="_38Get _2Hg6H _1dBSx _3slGi"]';
const DEFINITION_CHOICES = '[data-test="challenge-choice"]';

const TYPE_DIALOGUE = 'dialogue';
const DIALOGUE = '[data-test="challenge challenge-dialogue"]';
const DIALOGUE_CHOICES = '[data-test="challenge-choice"]';
const DIALOGUE_CHOICE_TEXT = '[data-test="challenge-judge-text"]';

const TYPE_FORM = 'form';
const FORM = '[data-test="challenge challenge-form"]';
const FORM_PROMPT = '[class="_2SfAl _2Hg6H"]';
const FORM_CHOICES = '[data-test="challenge-choice"]';

const TYPE_GAPFILL = 'gapFill';
const GAPFILL = '[data-test="challenge challenge-gapFill"]';
const GAPFILL_PROMPT = '[class="_3Fi4A _2Hg6H"]';
const GAPFILL_CHOICES = '[data-test="challenge-choice"]';

const TYPE_JUDGE = 'judge';
const JUDGE = '[data-test="challenge challenge-judge"]';
const JUDGE_PROMPT = '[class="_3-JBe"]';
const JUDGE_CHOICES = '[data-test="challenge-choice"]';

const TYPE_MATCH = 'match';
const MATCH = '[data-test="challenge challenge-match"]';
const MATCH_BUTTONS = '[class="_35eLX"]';
const MATCH_BUTTON_TEXT = '[data-test="challenge-tap-token-text"]';
const MATCH_BUTTON_SELECTED = '[class="_1rl91 WOZnx _275sd _1ZefG notranslate _6Nozy _1O290 _2HRY_ pmjld edf-m"]';
const NAME = '[data-test="challenge challenge-name"]';
const NAME_PROMPT = '[data-test="challenge-header"]';
const NAME_TEXTBOX = '[data-test="challenge-text-input"]';

const TYPE_READCOMPREHENSION = 'readComprehension';
const READCOMPREHENSION = '[data-test="challenge challenge-readComprehension"]';
const READCOMPREHENSION_PROMPT = '[data-test="hint-token"]';
const READCOMPREHENSION_BUTTONS = '[data-test="challenge-choice"]';
const PARTIALREVERSETRANSLATE = '[data-test="challenge challenge-partialReverseTranslate"]';
const PARTIALREVERSETRANSLATE_PROMPT = '[data-test="hint-token"]';
const PARTIALREVERSETRANSLATE_TEXTBOX = '[class="_1fYGK _2FKqf _2ti2i"]';
const PARTIALREVERSETRANSLATE_TEXT = 'span:not([class]), [contenteditable="true"]';

const TYPE_SELECT = 'select';
const SELECT = '[data-test="challenge challenge-select"]';
const SELECT_PROMPT = '[data-test="challenge-header"]';
const SELECT_CHOICES = '[data-test="challenge-choice"]';
const SPEAK_ANSWER_AREA = '[class="PcKtj"]';
const SPEAK_BUTTON_TYPE = '[class="_2J2do"]';
const SPEAK_SELECTED_TEXT_CLICK = '[data-test="challenge-tap-token-text"]';

const TYPE_TAPCLOZE = 'tapCloze';
const TAPCLOZE = '[data-test="challenge challenge-tapCloze"]';
const TAPCLOZE_PROMPT = '[data-test="hint-token"]';
const TAPCLOZE_SELECTED = '[class="_1LQx7"]';
const TAPCLOZE_BUTTON_TEXT = '[data-test="challenge-tap-token-text"]';

const TYPE_TAPCOMPLETE = 'tapComplete';
const TAPCOMPLETE = '[data-test="challenge challenge-tapComplete"]';
const TAPCOMPLETE_PROMPT = '[data-test="hint-token"]';
const TAPCOMPLETE_SELECTED = '[class="_2Z2xv"]';
const TAPCOMPLETE_SELECTED_TEXT_CLICK = '[data-test="challenge-tap-token-text"]';
const TAPCOMPLETE_SELECTED_TEXT_TYPE = '[class="_2J2do"]';
const TAPCOMPLETE_SELECTED_TEXT = `${TAPCOMPLETE_SELECTED_TEXT_CLICK}, ${TAPCOMPLETE_SELECTED_TEXT_TYPE}`;

const TYPE_TAPCOMPLETETABLE = 'tapCompleteTable';
const TAPCOMPLETETABLE = '[data-test="challenge challenge-tapCompleteTable"]';
const TAPCOMPLETETABLE_HINT_TOKENS = '[class="_34k_q _3Lg1h _13doy"]';
const TAPCOMPLETETABLE_CHOICES = '[class="_2Z2xv"]';
const TAPCOMPLETETABLE_CHOICE_TEXT = '[data-test="challenge-tap-token-text"]';

const TYPE_TRANSLATE = 'translate';
const TRANSLATE = '[data-test="challenge challenge-translate"]';
const TRANSLATE_PROMPT = '[data-test="hint-token"]';
const TRANSLATE_TEXTBOX = '[data-test="challenge-translate-input"]';

const TYPECLOZE = '[data-test="challenge challenge-typeCloze"]';
const TYPECLOZE_BLANK = '[class="_3bKcr"]';
const TYPECLOZE_CORRECT = '[class="caPDQ"]';
const TYPECLOZE_SUBMISSION = '[class="Y5JxA _17nEt"]';

const TYPECOMPLETETABLE = '[data-test="challenge challenge-typeCompleteTable"]';
const TYPECOMPLETETABLE_BLANKS = '[class="_1Rf3h"]';
const TYPECOMPLETETABLE_ANSWER = '[class="caPDQ"]';
const TYPECOMPLETETABLE_SUBMISSION = '[class="Y5JxA _17nEt"]';

function makeSubmission(extraInfo = null) {
  if (document.querySelector(ASSIST)) {
    const challengePrompt = document.querySelector(ASSIST_PROMPT).textContent;
    const choices = Array.from(document.querySelectorAll(ASSIST_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    console.log("assist detected");
    console.log(`assist prompt: ${challengePrompt}`);
    console.log(`assist button chosen: ${choiceID}`);
    return [challengePrompt, choiceID, TYPE_ASSIST];
  }

  if (document.querySelector(COMPLETEREVERSETRANSLATION)) {
    console.log('completeReverseTranslation detected');
    // eslint-disable-next-line max-len
    const promptArray = Array.from(document.querySelectorAll(COMPLETEREVERSETRANSLATION_PROMPT));
    const challengePrompt = promptArray.map((x) => x.textContent).join('');
    const answer = document.querySelector(TRANSLATE_TEXTBOX)?.value;
    if (answer === undefined) {
      // eslint-disable-next-line max-len
      const textbox = Array.from(document.querySelector(COMPLETEREVERSETRANSLATION_TEXTBOX).children);
      console.log('completeReverseTranslation textbox:');
      console.log(textbox);
      const answerArray = textbox.map((element) => {
        const blank = element.querySelector(COMPLETEREVERSETRANSLATION_BLANK);
        return blank?.value || element.textContent;
      });
      const answer = answerArray.join('');
      console.log(`completeReverseTranslation prompt: ${challengePrompt}`);
      console.log(`completeReverseTranslation answer: ${answer}`);
    }
    return [challengePrompt, answer, TYPE_TRANSLATE];
  }

  if (document.querySelector(DEFINITION)) {
    const challengePrompt = document.querySelector(DEFINITION_PROMPT).textContent.replace(/[“”]+/g, '');
    const choices = Array.from(document.querySelectorAll(DEFINITION_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    console.log(`challenge prompt: ${challengePrompt}`);
    console.log(`choices: ${choices}`);
    console.log(`choice ID: ${choiceID}`);
    return [challengePrompt, choiceID, TYPE_DEFINITION];
  }

  if (document.querySelector(DIALOGUE)) {
    const promptArray = Array.from(document.querySelectorAll(DIALOGUE_CHOICE_TEXT));
    const challengePrompt = promptArray.map((x) => (x.textContent)).join(',');
    const choices = Array.from(document.querySelectorAll(DIALOGUE_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    console.log(`challenge prompt: ${challengePrompt}`);
    console.log(`choices: ${choices}`);
    console.log(`choice ID: ${choiceID}`);
    return [challengePrompt, choiceID, TYPE_DIALOGUE];
  }

  if (document.querySelector(FORM)) {
    const challengePrompt = document.querySelector(FORM_PROMPT);
    const promptNoBlank = challengePrompt.dataset.prompt.replace(/_/g, '');
    const choices = Array.from(document.querySelectorAll(FORM_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [promptNoBlank, choiceID, TYPE_FORM];
  }

  if (document.querySelector(GAPFILL)) {
    const promptArray = Array.from(document.querySelectorAll(GAPFILL_PROMPT));
    const challengePrompt = promptArray.map((x) => (x.textContent)).join('');
    const choices = Array.from(document.querySelectorAll(GAPFILL_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, TYPE_GAPFILL];
  }

  if (document.querySelector(JUDGE)) {
    const challengePrompt = document.querySelector(JUDGE_PROMPT).textContent;
    const choices = Array.from(document.querySelectorAll(JUDGE_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, TYPE_JUDGE];
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

  if (document.querySelector(MATCH)) {
    const buttonArray = Array.from(document.querySelectorAll(MATCH_BUTTON_TEXT));
    const buttonCount = buttonArray.length;
    const learningTokenButtons = buttonArray.slice(buttonCount / 2);
    const challengePrompt = learningTokenButtons.map((x) => x.textContent).sort().join(' ');
    const choices = extraInfo;
    return [challengePrompt, choices, TYPE_MATCH];
  }

  if (document.querySelector(NAME)) {
    const challengePromptVerbose = document.querySelector(NAME_PROMPT).textContent;
    const challengePrompt = challengePromptVerbose.match(/“(.*?)”/)[1];
    const textBox = document.querySelector(NAME_TEXTBOX);
    const answer = textBox.value;
    return [challengePrompt, answer, TYPE_TRANSLATE];
  }

  if (document.querySelector(PARTIALREVERSETRANSLATE)) {
    console.log('partialReverseTranslate detected');
    const promptArray = Array.from(document.querySelectorAll(PARTIALREVERSETRANSLATE_PROMPT));
    const challengePrompt = promptArray.map((x) => x.textContent).join('');
    console.log(`Prompt submitted: ${challengePrompt}`);
    const textbox = document.querySelector(PARTIALREVERSETRANSLATE_TEXTBOX);
    const answerArray = Array.from(textbox.querySelectorAll(PARTIALREVERSETRANSLATE_TEXT));
    console.log(`answerArrray: ${answerArray}`);
    const answer = answerArray.map((x) => x.textContent).join('');
    console.log(`answer: ${answer}`);
    return [challengePrompt, answer, TYPE_TRANSLATE];
  }

  if (document.querySelector(READCOMPREHENSION)) {
    const promptArray = Array.from(document.querySelectorAll(READCOMPREHENSION_PROMPT));
    const challengePrompt = promptArray.map((x) => x.textContent).join('');
    console.log(`Prompt submitted: ${challengePrompt}`);
    const choices = Array.from(document.querySelectorAll(READCOMPREHENSION_BUTTONS));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, TYPE_READCOMPREHENSION];
  }

  if (document.querySelector(SELECT)) {
    const challengePrompt = document.querySelector(SELECT_PROMPT).textContent;
    const choices = Array.from(document.querySelectorAll(SELECT_CHOICES));
    const choiceID = choices.findIndex((x) => x.tabIndex === 0);
    return [challengePrompt, choiceID, TYPE_SELECT];
  }


  if (document.querySelector(TAPCLOZE)) {
    const promptArray = Array.from(document.querySelectorAll(TAPCLOZE_PROMPT));
    const challengePrompt = promptArray.map((x) => x.textContent).join('');
    const chosenButton = document.querySelector(TAPCLOZE_SELECTED);
    const chosenButtonText = chosenButton.querySelector(TAPCLOZE_BUTTON_TEXT).textContent;
    return [challengePrompt, chosenButtonText, TYPE_TAPCLOZE];
  }

  if (document.querySelector(TAPCOMPLETE)) {
    const promptArray = Array.from(document.querySelectorAll(TAPCOMPLETE_PROMPT));
    const challengePrompt = promptArray.map((x) => x.textContent).filter((x) => x !== ' ').join(' ');
    const selectionArray = Array.from(document.querySelectorAll(TAPCOMPLETE_SELECTED));
    const selectionText = selectionArray.map((button) => button.querySelector(TAPCOMPLETE_SELECTED_TEXT).textContent).join(' ');
    console.log(`Prompt submitted: ${challengePrompt}`);
    console.log(`Answer submitted: ${selectionText}`);
    return [challengePrompt, selectionText, TYPE_TAPCOMPLETE];
  }

  if (document.querySelector(TAPCOMPLETETABLE)) {
    // eslint-disable-next-line max-len
    const promptArray = Array.from(document.querySelectorAll(TAPCOMPLETETABLE_HINT_TOKENS)).slice(1);
    const challengePrompt = promptArray.map((x) => x.textContent).sort();

    const choiceArray = Array.from(document.querySelectorAll(TAPCOMPLETETABLE_CHOICES));
    // eslint-disable-next-line max-len
    const choices = choiceArray.map((x) => x.querySelector(TAPCOMPLETETABLE_CHOICE_TEXT).textContent).join();

    return [challengePrompt, choices, TYPE_TAPCOMPLETETABLE];
  }

  if (document.querySelector(TRANSLATE)) {
    const promptArray = Array.from(document.querySelectorAll(TRANSLATE_PROMPT));
    const challengePrompt = promptArray.map((x) => x.textContent).join('');
    const answer = document.querySelector(TRANSLATE_TEXTBOX)?.value;
    if (answer === undefined) {
      const answerArea = document.querySelector(SPEAK_ANSWER_AREA);
      const selectionArrayClick = Array.from(answerArea.querySelectorAll(SPEAK_SELECTED_TEXT_CLICK));
      const selectionArrayType = Array.from(answerArea.querySelectorAll(SPEAK_BUTTON_TYPE));
      const selectionArray = selectionArrayClick.length ? selectionArrayClick : selectionArrayType;
      const selectionText = selectionArray.map((button) => button.textContent).join(' ');
      console.log(`Speak prompt: ${challengePrompt}`);
      console.log(`Speak array: ${selectionArray}`);
      console.log(`Speak answer: ${selectionText}`);
      return [challengePrompt, selectionText, TYPE_TRANSLATE];
    }

    console.log(`Translate prompt submitted: ${challengePrompt}`);
    return [challengePrompt, answer, TYPE_TRANSLATE];
  }

  if (document.querySelector(TYPECLOZE)) {
    const blank = document.querySelector(TYPECLOZE_BLANK);
    const correctAnswer = blank.querySelector(TYPECLOZE_CORRECT).textContent.replace(/_/g, '');
    const submission = blank.querySelector(TYPECLOZE_SUBMISSION).value.replace(IGNORED_CHARACTERS, '');
    return correctAnswer.toLowerCase() === submission.toLowerCase()
      ? [SKIP_CHECKING_TRUE, null, null]
      : [SKIP_CHECKING_FALSE, null, null];
  }

  if (document.querySelector(TYPECOMPLETETABLE)) {
    const blanks = Array.from(document.querySelectorAll(TYPECOMPLETETABLE_BLANKS));
    console.log(`blanks: ${blanks}`);
    const correct = blanks.every((blank) => {
      const correctAnswer = blank.querySelector(TYPECOMPLETETABLE_ANSWER).textContent.replace(IGNORED_CHARACTERS, '');
      console.log(`Corect answer: ${correctAnswer}`);
      const submission = blank.querySelector(TYPECOMPLETETABLE_SUBMISSION).value;
      console.log(`Submitted answer: ${submission}`);
      return correctAnswer.toLowerCase() === submission.toLowerCase().trim();
    });
    const challengePrompt = correct ? SKIP_CHECKING_TRUE : SKIP_CHECKING_FALSE;
    return [challengePrompt, null, null];
  }

  return 0;
}

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
typescriptMap.TSMap = void 0;
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
typescriptMap.TSMap = TSMap;

function test() {
  return { correct: false };
}

JSON.parse('{"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","×":"x","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","÷":"/","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Ĉ":"C","ĉ":"c","Ċ":"C","ċ":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"D","đ":"d","Ē":"E","ē":"e","Ĕ":"E","ĕ":"e","Ė":"E","ė":"e","Ę":"E","ę":"e","Ě":"E","ě":"e","Ĝ":"G","ĝ":"g","Ğ":"G","ğ":"g","Ġ":"G","ġ":"g","Ģ":"G","ģ":"g","Ĥ":"H","ĥ":"h","Ħ":"H","ħ":"h","Ĩ":"I","ĩ":"i","Ī":"I","ī":"i","Ĭ":"I","ĭ":"i","Į":"I","į":"i","İ":"I","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","ĺ":"l","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ŀ":"L","ŀ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ŏ":"O","ŏ":"o","Ő":"O","ő":"o","Ŕ":"R","ŕ":"r","Ŗ":"R","ŗ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ŝ":"S","ŝ":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ŧ":"T","ŧ":"t","Ũ":"U","ũ":"u","Ū":"U","ū":"u","Ŭ":"U","ŭ":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ơ":"O","ơ":"o","Ư":"U","ư":"u","Ș":"S","ș":"s","Ț":"T","ț":"t","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ό":"Ο","Ύ":"Υ","Ώ":"Ω","ΐ":"ι","Ϊ":"Ι","Ϋ":"Υ","ά":"α","έ":"ε","ή":"η","ί":"ι","ΰ":"υ","ϊ":"ι","ϋ":"υ","ό":"ο","ύ":"υ","ώ":"ω","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y"}');

const frame = document.createElement('iframe');
document.body.appendChild(frame);
frame.contentWindow.console.log('Content script running');

// Check user submission whenever the Enter key is pressed
document.addEventListener(
  'keydown',
  async (e) => {
    if (e.key === 'Enter') {
      const submissionButton = document.querySelector(SUBMISSION_BUTTON);
      const submissionButtonSpan = submissionButton.querySelector(SUBMISSION_BUTTON_SPAN);
      if (submissionButtonSpan.innerHTML !== 'Check') {
        /* The submission button can be either "Check" or "Continue".
        If it is "continue" then just propagate the "Enter key pressed" event. */
        return;
      }

      // If the button is "Check" then do not propagate the keypress.
      e.preventDefault();
      e.stopImmediatePropagation();

      frame.contentWindow.console.log('Submission button: ');
      frame.contentWindow.console.log(submissionButton);
      frame.contentWindow.console.log(Object.keys(submissionButton));
      // console.log(JSON.parse(JSON.stringify(submissionButton)));
      // console.log(submissionButton.onclick);
      // submissionButton.onclick();
      makeSubmission();
      // const marking = await browser.runtime.sendMessage({
      //   challengePrompt,
      //   answer,
      //   challengeType,
      // });

      const marking = test();
      console.log(marking);
      if (marking.correct) {
        submissionButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      }
    }
  },
);

function addSubmissionListener(button) {
  button.addEventListener('click', async (e) => {
    const previouslyClicked = document.querySelector(MATCH_BUTTON_SELECTED);
    if (!previouslyClicked) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();

    const previousText = previouslyClicked.querySelector(MATCH_BUTTON_TEXT).textContent;
    const currentButton = button.textContent;
    const buttonNumber = currentButton.slice(0, 1);
    const currentText = currentButton.slice(1);

    const [challengePrompt, answer, challengeType] = makeSubmission({ previousText, currentText });
    const marking = await browser.runtime.sendMessage({
      challengePrompt,
      answer,
      challengeType,
    });

    if (marking.correct) {
      document.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: buttonNumber }));
    }
  });
}

const observer = new MutationObserver(() => {
  if (document.querySelector(MATCH_BUTTONS)) {
    const matchButtons = document.querySelectorAll(MATCH_BUTTONS);
    matchButtons.forEach(addSubmissionListener);
  }
});

observer.observe(document.body, { childList: true, subtree: true });
