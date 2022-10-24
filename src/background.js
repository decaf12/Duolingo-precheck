import * as map from 'typescript-map';
import * as constants from './constants';
import * as checkAnswers from './checkAnswers';

(function loadAnswerKey() {
  let answerkeyJSON;
  const answerKey = new map.TSMap();

  /**
   * Captures lesson info from Duolingo and builds the answer key hashmap.
   * @param {object} details: Details of the request to Duolingo for the new lesson.}
   */
  function getAnswerKey(details) {
    const filter = browser.webRequest.filterResponseData(details.requestId);

    // Wipe the slate clean when a new lesson starts.
    filter.onstart = () => {
      answerkeyJSON = '';
      answerKey.clear();
    };

    /* DL sends the answer key as a JSON. Keep appending to answerkeyJSON as
       we receive chunks of the answer key. */
    filter.ondata = (event) => {
      const decoder = new TextDecoder('utf-8');
      answerkeyJSON += decoder.decode(event.data);
      filter.write(event.data);
    };

    /* Once we have the entire answer key we can build the hashmap.

       To view the answer key in the browser, bring up the console,
       go to the "Network" tab, and search for the word "sessions".

       In the latest "sessions" entry, click on the "Response" tab.

       The answer key is in the "challenges" property, as well as
       the "adaptiveChallenges" and "adaptiveInterleavedChallenged"
       properties if they exist. */
    filter.onstop = () => {
      // First turn the answer key JSON into an object.
      const response = JSON.parse(answerkeyJSON);

      // We are only interested in the "challenges" property...
      checkAnswers.addToKey(answerKey, response.challenges);

      /* ... and the "adaptiveChallenges" and
        "adaptiveInterleavedChallenged" properties */
      if ('adaptiveChallenges' in response) {
        checkAnswers.addToKey(answerKey, response.adaptiveChallenges);
      }
      if ('adaptiveInterleavedChallenges' in response) {
        checkAnswers.addToKey(answerKey, response.adaptiveInterleavedChallenges.challenges);
      }

      // Disconnect the filter once we are done.
      filter.disconnect();
    };
  }

  /**
   * @param {object} req: object sent as a message from the content script. This is sent after each
   *                      exercise, and represents the question and answer submitted by the user.
   *                      The object has three properties:
   *                        0) challengePrompt: prompt text for the exercise.
   *                        1) challengeType: type of exercise. challengeType and challengePrompt
   *                                          together form the key in the answer key hashmap.
   *                        2) answer: user's answer
   * @param {object} sender: unused
   * @param {function} sendResponse: the function to pass a message back to the content script. Here
   *                                 it returns an object with a single property "correct", which
   *                                 is a boolean indicating whether the user's answer can be marked
   *                                 as correct.
   */
  function handlemessage(req, sender, sendResponse) {
    // Call checkAnswers.checkAnswer() to mark the user's submission.
    // eslint-disable-next-line max-len
    const isCorrect = checkAnswers.checkAnswer(answerKey, req.answer, req.challengePrompt, req.challengeType);

    /* Send grading result back to the content script. The content script will send the user's
       submission on to DL (or not) depending on the result. */
    sendResponse({ correct: isCorrect });
  }

  // Build the answer key as soon as we receive the header from DL's lesson.
  browser.webRequest.onHeadersReceived.addListener(
    getAnswerKey,

    /* Some DL updates break the code by changing the lessons' URL patterns.
       Look here first if the plugin suddenly stops working. */
    {
      urls: [constants.CHALLENGE_URL_PATTERN,
        constants.CHECKPOINT_URL_PATTERN,
        constants.CHALLENGE_URL_LESSON_PATTERN,
        constants.CHALLENGE_URL_REVIEW_PATTERN],
    },

    ['blocking'],
  );

  // Call handlemessage() every time the content script sends a message.
  browser.runtime.onMessage.addListener(handlemessage);
}());

// Inject the content script every time we start a lesson.
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
    urls: [constants.CHALLENGE_URL_FRONTEND_PATTERN,
      constants.CHECKPOINT_URL_PATTERN,
      constants.CHALLENGE_URL_LESSON_PATTERN,
      constants.CHALLENGE_URL_REVIEW_PATTERN],
    properties: ['url'],
  },
);
