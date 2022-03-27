import * as constants from "./constants.js";

(function() {
  let answerkey_JSON;

  browser.webRequest.onBeforeRequest.addListener(
    getAnswerKey,
    {urls: [constants.CHALLENGE_URL_PATTERN]},
    ["blocking"]
  );
  
  browser.webRequest.onBeforeRequest.addListener(
    checkAnswerKey,
    {urls: [constants.SUBMISSION_URL_PATTERN]},
    ["blocking"]
  );
  
  
  function getAnswerKey(details) {   
    let filter = browser.webRequest.filterResponseData(details.requestId);
    
    filter.onstart = event => {
      answerkey_JSON = "";
     }
  
     filter.ondata = event => {
       let decoder = new TextDecoder("utf-8");
       answerkey_JSON += decoder.decode(event.data);
       filter.write(event.data);
     }
     filter.onstop = event => {
       let answerkey = JSON.parse(answerkey_JSON).challenges;
       console.log("Answer key JSON: " + answerkey)
       filter.disconnect();
     }
  }

  function checkAnswerKey(details) {
    return {cancel: true};
  }
})()