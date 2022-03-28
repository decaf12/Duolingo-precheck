import * as constants from "./constants.js";

(function() {
  let answerkey_JSON;
  const answerkey = new Map();

  browser.webRequest.onBeforeRequest.addListener(
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
      const challenges = JSON.parse(answerkey_JSON).challenges;
      challenges.forEach(challenge => {
        answerkey.set(challenge.prompt, true);
      })
      console.log("Answer key JSON: " + answerkey)
      filter.disconnect();
    }
  }

  function handlemessage(req, sender, sendResponse) {
    console.log("Message: " + req.answer);
    let isCorrect = false;
    if (req.answer === "Is Anna there?") {
      isCorrect = true;
    }
    sendResponse({ correct: isCorrect });
  }
})()

chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  chrome.tabs.executeScript(null,{file:"../content.js"});
});