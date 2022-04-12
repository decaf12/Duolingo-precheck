import * as map from 'typescript-map';
import * as constants from './constants';
import * as checkAnswers from './checkAnswers';

(function loadAnswerKey() {
  let answerkeyJSON;
  const answerKey = new map.TSMap();

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
      checkAnswers.addToKey(answerKey, response.challenges);
      if ('adaptiveChallenges' in response) {
        checkAnswers.addToKey(answerKey, response.adaptiveChallenges);
      }
      if ('adaptiveInterleavedChallenges' in response) {
        checkAnswers.addToKey(answerKey, response.adaptiveInterleavedChallenges.challenges);
      }
      filter.disconnect();
    };
  }

  function handlemessage(req, sender, sendResponse) {
    // eslint-disable-next-line max-len
    const isCorrect = checkAnswers.checkAnswer(answerKey, req.answer, req.challengePrompt, req.challengeType);
    sendResponse({ correct: isCorrect });
  }

  browser.webRequest.onHeadersReceived.addListener(
    getAnswerKey,
    { urls: [constants.CHALLENGE_URL_PATTERN] },
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
        runAt: 'document_start',
      },
    );
  },
  {
    urls: [constants.CHALLENGE_URL_FRONTEND_PATTERN],
    properties: ['url'],
  },
);
