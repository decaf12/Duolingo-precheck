import * as map from 'typescript-map';
import CHALLENGE_URL_PATTERN from './constants';
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
      checkAnswers.addToKey(answerKey, response.adaptiveChallenges);
      filter.disconnect();
    };
  }

  function handlemessage(req, sender, sendResponse) {
    console.log(`Answer submitted: ${req.answer}`);
    // eslint-disable-next-line max-len
    const isCorrect = checkAnswers.checkAnswer(answerKey, req.answer, req.prompt, req.challengeType);
    sendResponse({ correct: isCorrect });
  }

  browser.webRequest.onHeadersReceived.addListener(
    getAnswerKey,
    { urls: [CHALLENGE_URL_PATTERN] },
    ['blocking'],
  );

  browser.runtime.onMessage.addListener(handlemessage);
}());

browser.webNavigation.onHistoryStateUpdated.addListener(() => {
  browser.tabs.executeScript(null, { file: '../content' });
});
