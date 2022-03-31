import * as constants from "./constants.js";
import * as map from "typescript-map";

(function() {
  let answerkey_JSON;
  const answerkey = new map.TSMap();  

  browser.webRequest.onHeadersReceived.addListener(
    getAnswerKey,
    {urls: [constants.CHALLENGE_URL_PATTERN]},
    ["blocking"]
  );
  
  browser.runtime.onMessage.addListener(handlemessage);

  function getAnswerKey(details) {   
    let filter = browser.webRequest.filterResponseData(details.requestId);
    
    filter.onstart = event => {
      answerkey_JSON = "";
      answerkey.clear();
    }
  
    filter.ondata = event => {
      const decoder = new TextDecoder("utf-8");
      answerkey_JSON += decoder.decode(event.data);
      filter.write(event.data);
    }

    filter.onstop = event => {
      const response = JSON.parse(answerkey_JSON);
      response.challenges.forEach(challenge => {
        answerkey.set(challenge.prompt, challenge.compactTranslations);
      })
      filter.disconnect();
    }
  }

  function handlemessage(req, sender, sendResponse) {
    console.log("Message: " + req.answer);
    const correctAnswers = answerkey.get(req.prompt);
    const isCorrect = req.answer === correctAnswers[0];
    console.log(`Correct answer: ${correctAnswers[0]}`);
    console.log(`Submitted answer: ${req.answer}`);
    sendResponse({ correct: isCorrect });
  }
})()

browser.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  browser.tabs.executeScript(null, {file:"../content.js"});
});