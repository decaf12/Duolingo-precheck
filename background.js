import { CHALLENGE_URL_PATTERN } from './constants.js';

(function() {
  let answerkey_JSON;

  browser.webRequest.onBeforeRequest.addListener(
    getAnswerKey,
    {urls: [CHALLENGE_URL_PATTERN]},
    ["blocking"]
  );
  
  browser.runtime.onMessage.addListener(handlemessage);
  
  function getAnswerKey(details) {   
    let filter = browser.webRequest.filterResponseData(details.requestId);
    
    filter.onstart = event => {
      answerkey_JSON = "";
    };
  
    filter.ondata = event => {
      const decoder = new TextDecoder("utf-8");
      answerkey_JSON += decoder.decode(event.data);
      filter.write(event.data);
    };

    filter.onstop = event => {
      const answerkey = JSON.parse(answerkey_JSON).challenges;
      console.log("Answer key JSON: " + answerkey);
      filter.disconnect();
    };
  }

  function handlemessage(req, sender, sendResponse) {
    console.log("Message: " + req.answer);
    sendResponse({correct: false});
  }
})();

chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  chrome.tabs.executeScript(null,{file:"../content.js"});
});
