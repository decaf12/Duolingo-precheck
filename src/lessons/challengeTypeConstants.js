export const CHALLENGE_AREA = '[class="_863KE"]';
export const SUBMISSION_BUTTON_LESSON = '[data-test="player-next"]';
export const SUBMISSION_BUTTON_SPAN = '[class="_1fHYG"]';
export const SUBMISSION_BUTTON_STORY = '[data-test="stories-player-continue"]';
export const START_BUTTON_STORY = '[data-test="story-start"]';
export const SKIP_CHECKING_TRUE = 'skip checking: true';
export const SKIP_CHECKING_FALSE = 'skip checking: false';
export const MULTIPLE_CHOICE_CHOICES = '[data-test="challenge-choice"]';

export const IGNORED_CHARACTERS = /[_\-\s,.?!;]/g;
export const IGNORED_CHARACTERS_STR = '_-,.?!;';
export const STRAIGHT_QUOTE = String.fromCharCode(34);

export const TYPE_ASSIST = 'assist';
export const ASSIST = '[data-test="challenge challenge-assist"]';
export const ASSIST_PROMPT = '[class="_1KUxv _11rtD"]';
export const ASSIST_CHOICES = '[data-test="challenge-choice"]';

export const TYPE_COMPLETEREVERSETRANSLATION = 'completeReverseTranslation';
export const COMPLETEREVERSETRANSLATION = '[data-test="challenge challenge-completeReverseTranslation"]';
export const COMPLETEREVERSETRANSLATION_PROMPT = '[data-test="hint-token"]';
export const COMPLETEREVERSETRANSLATION_TEXTBOX = '[class="_3f_Q3 _2FKqf _2ti2i"]';
export const COMPLETEREVERSETRANSLATION_BLANK = '[data-test="challenge-text-input"]';
export const COMPLETEREVERSETRANSLATION_PLACEHOLDER = '[class="caPDQ"]';

export const TYPE_DEFINITION = 'definition';
export const DEFINITION = '[data-test="challenge challenge-definition"]';
export const DEFINITION_PROMPT = '[class="_38Get _2Hg6H _1dBSx _3slGi"]';
export const DEFINITION_CHOICES = '[data-test="challenge-choice"]';

export const TYPE_DIALOGUE = 'dialogue';
export const DIALOGUE = '[data-test="challenge challenge-dialogue"]';
export const DIALOGUE_CHOICES = '[data-test="challenge-choice"]';
export const DIALOGUE_CHOICE_TEXT = '[data-test="challenge-judge-text"]';

export const TYPE_FORM = 'form';
export const FORM = '[data-test="challenge challenge-form"]';
export const FORM_PROMPT = '[class="_2SfAl _2Hg6H"]';
export const FORM_CHOICES = '[data-test="challenge-choice"]';

export const TYPE_GAPFILL = 'gapFill';
export const GAPFILL = '[data-test="challenge challenge-gapFill"]';
export const GAPFILL_PROMPT = '[class="_3Fi4A _2Hg6H"]';
export const GAPFILL_CHOICES = '[data-test="challenge-choice"]';

export const TYPE_JUDGE = 'judge';
export const JUDGE = '[data-test="challenge challenge-judge"]';
export const JUDGE_PROMPT = '[class="_3-JBe"]';
export const JUDGE_CHOICES = '[data-test="challenge-choice"]';

export const LISTENCOMPLETE_TEXTBOX = '[class="_3t3oQ _2FKqf _2ti2i"]';
export const LISTENCOMPLETE_BLANK = '[data-test="challenge-text-input"]';

export const TYPE_LISTENLAP = 'listenTap';
export const LISTENTAP = '[data-test="challenge challenge-translate"]';
export const LISTENTAP_PROMPT = '[data-test="hint-token"]';
export const LISTENTAP_ANSWER_AREA = '[class="PcKtj"]';
export const LISTENTAP_BUTTON_CLICK = '[class="_13HXc"]';
export const LISTENTAP_BUTTON_TYPE = '[class="_2J2do"]';
export const LISTENTAP_BUTTON = `${LISTENTAP_BUTTON_CLICK}, ${LISTENTAP_BUTTON_TYPE}`;

export const LISTENMATCH_BUTTON_SELECTED = '[class="LhRk3 WOZnx _275sd _1ZefG notranslate _6Nozy _1O290 _2HRY_ edf-m"]';
export const LISTENMATCH_SOUNDWAVE = '[class="_2GTek _1bxd8 _19tAr"]';

export const TYPE_MATCH = 'match';
export const MATCH = '[data-test="challenge challenge-match"]';
export const MATCH_BUTTONS = '[class="_1deIS"]';
export const MATCH_BUTTON_TEXT = '[data-test="challenge-tap-token-text"]';
export const MATCH_BUTTON_SELECTED = '[class="_3CBig _1N-oo _36Vd3 _16r-S notranslate _6Nozy _1O290 _2HRY_ pmjld edf-m"]';
export const MATCH_BUTTON_NUMBER_UNSELECTED = '[class="Z7UoT _2S0Zh _2TrnF"]';
export const MATCH_BUTTON_NUMBER_SELECTED = '[class="_2R_o5 _2S0Zh _2TrnF"]';
export const MATCH_BUTTON_NUMBER_GREYED = '[class="_1KBJW _2S0Zh _2TrnF"]';

export const TYPE_NAME = 'name';
export const NAME = '[data-test="challenge challenge-name"]';
export const NAME_BUTTON = '[data-test="challenge-choice"]';
export const NAME_BUTTON_TEXT = '[data-test="challenge-judge-text"]';
export const NAME_BUTTON_SELECTED = '_3C_oC disCS _2bJln _2-OmZ';
export const NAME_PROMPT = '[data-test="challenge-header"]';
export const NAME_TEXTBOX = '[data-test="challenge-text-input"]';

export const TYPE_READCOMPREHENSION = 'readComprehension';
export const READCOMPREHENSION = '[data-test="challenge challenge-readComprehension"]';
export const READCOMPREHENSION_PROMPT = '[data-test="hint-token"]';
export const READCOMPREHENSION_BUTTONS = '[data-test="challenge-choice"]';

export const TYPE_PARTIALREVERSETRANSLATE = 'partialReverseTranslate';
export const PARTIALREVERSETRANSLATE = '[data-test="challenge challenge-partialReverseTranslate"]';
export const PARTIALREVERSETRANSLATE_PROMPT = '[data-test="hint-token"]';
export const PARTIALREVERSETRANSLATE_TEXTBOX = '[class="_1fYGK _2FKqf _2ti2i"]';
export const PARTIALREVERSETRANSLATE_TEXT = 'span:not([class]), [contenteditable="true"]';

export const TYPE_SELECT = 'select';
export const SELECT = '[data-test="challenge challenge-select"]';
export const SELECT_PROMPT = '[data-test="challenge-header"]';
export const SELECT_CHOICES = '[data-test="challenge-choice"]';

export const TYPE_SPEAK = 'speak';
export const SPEAK = '[data-test="challenge challenge-translate"]';
export const SPEAK_PROMPT = '[data-test="hint-token"]';
export const SPEAK_ANSWER_AREA = '[class="PcKtj"]';
export const SPEAK_BUTTON_CLICK = '[class="_13HXc"]';
export const SPEAK_BUTTON_TYPE = '[class="_2J2do"]';
export const SPEAK_BUTTON = `${SPEAK_BUTTON_CLICK}, ${SPEAK_BUTTON_TYPE}`;
export const SPEAK_SELECTED_TEXT_CLICK = '[data-test="challenge-tap-token-text"]';

export const TYPE_TAPCLOZE = 'tapCloze';
export const TAPCLOZE = '[data-test="challenge challenge-tapCloze"]';
export const TAPCLOZE_PROMPT = '[data-test="hint-token"]';
export const TAPCLOZE_SELECTED = '[class="_1LQx7"]';
export const TAPCLOZE_BUTTON_TEXT = '[data-test="challenge-tap-token-text"]';

export const TYPE_TAPCOMPLETE = 'tapComplete';
export const TAPCOMPLETE = '[data-test="challenge challenge-tapComplete"]';
export const TAPCOMPLETE_PROMPT = '[data-test="hint-token"]';
export const TAPCOMPLETE_SELECTED = '[class="_2Z2xv"]';
export const TAPCOMPLETE_SELECTED_TEXT_CLICK = '[data-test="challenge-tap-token-text"]';
export const TAPCOMPLETE_SELECTED_TEXT_TYPE = '[class="_2J2do"]';
export const TAPCOMPLETE_SELECTED_TEXT = `${TAPCOMPLETE_SELECTED_TEXT_CLICK}, ${TAPCOMPLETE_SELECTED_TEXT_TYPE}`;

export const TYPE_TAPCOMPLETETABLE = 'tapCompleteTable';
export const TAPCOMPLETETABLE = '[data-test="challenge challenge-tapCompleteTable"]';
export const TAPCOMPLETETABLE_BLANKS = '[class="_1Bh_M"]';
export const TAPCOMPLETETABLE_HINT_TOKENS = '[class="_34k_q _3Lg1h _13doy"]';
export const TAPCOMPLETETABLE_PROMPT = '[data-test="hint-token"]';
export const TAPCOMPLETETABLE_CHOICES = '[class="_2Z2xv"]';
export const TAPCOMPLETETABLE_CHOICE_TEXT = '[data-test="challenge-tap-token-text"]';
export const TAPCOMPLETETABLE_NONBLANK_CHOICES = '[class="_34k_q _3Lg1h _13doy"]';

export const TYPE_TRANSLATE = 'translate';
export const TRANSLATE = '[data-test="challenge challenge-translate"]';
export const TRANSLATE_PROMPT = '[data-test="hint-token"]';
export const TRANSLATE_TEXTBOX = '[data-test="challenge-translate-input"]';

export const TYPECLOZE = '[data-test="challenge challenge-typeCloze"]';
export const TYPECLOZE_BLANK = '[class="_3bKcr"]';
export const TYPECLOZE_CORRECT = '[class="caPDQ"]';
export const TYPECLOZE_SUBMISSION = '[class="Y5JxA _17nEt"]';

export const TYPECOMPLETETABLE = '[data-test="challenge challenge-typeCompleteTable"]';
export const TYPECOMPLETETABLE_BLANKS = '[class="_1Rf3h"]';
export const TYPECOMPLETETABLE_ANSWER = '[class="caPDQ"]';
export const TYPECOMPLETETABLE_SUBMISSION = '[class="Y5JxA _17nEt"]';
