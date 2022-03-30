import { CHALLENGE_URL_PATTERN } from './constants.js';

// import { Map } from "typescript-map";

(function() {
  let answerkey_JSON;
  const answerkey = new Map();

  browser.webRequest.onHeadersReceived.addListener(
    getAnswerKey,
    {urls: [CHALLENGE_URL_PATTERN]},
    ["blocking"]
  );

  browser.webRequest.onBeforeRequest.addListener(
    questionTypeFilter,
    {urls: [CHALLENGE_URL_PATTERN]},
    ["blocking", "requestBody"]
  );
  
  browser.runtime.onMessage.addListener(handlemessage);

  function getAnswerKey(details) {   
    let filter = browser.webRequest.filterResponseData(details.requestId);
    
    filter.onstart = event => {
      answerkey_JSON = "";
      answerkey.clear();
    };
  
    filter.ondata = event => {
      const decoder = new TextDecoder("utf-8");
      answerkey_JSON += decoder.decode(event.data);
      filter.write(event.data);
    };

    filter.onstop = event => {
      const challenges = JSON.parse(answerkey_JSON).challenges;
      challenges.forEach(challenge => {
        answerkey.set(challenge.prompt, true);
      });
      console.log("Answer key JSON: " + answerkey);
      filter.disconnect();
    };
  }


  function questionTypeFilter(requestDetails) {
    console.log(`Challenge original: ${new Uint8Array(requestDetails.requestBody.raw[0].bytes)}`);

    let body = decodeURIComponent(new TextDecoder().decode(requestDetails.requestBody.raw[0].bytes));
    console.log(`Challenge types: ${body}`);
    
    let body_object = JSON.parse(body);
    // body_object.challengeTypes = ["translate"];
    body = JSON.stringify(body_object);
    console.log(`Challenge post-change: ${body}`);
    
    const encoded_Uint8 = new TextEncoder().encode(encodeURIComponent(body));
    const encoded_ArrayBuffer = encoded_Uint8.buffer.slice(encoded_Uint8.byteOffset, encoded_Uint8.byteLength + encoded_Uint8.byteOffset);
    requestDetails.requestBody.raw[0].bytes = encoded_ArrayBuffer;

    const body2 = decodeURIComponent(new TextDecoder().decode(requestDetails.requestBody.raw[0].bytes));
    console.log(`Challenge sent: ${body2}`);
    
    console.log(`Challenge bytes: ${new Uint8Array(requestDetails.requestBody.raw[0].bytes)}`);
  }

  function handlemessage(req, sender, sendResponse) {
    console.log("Message: " + req.answer);
    let isCorrect = false;
    if (req.answer === "Is Anna there?") {
      isCorrect = true;
    }
    sendResponse({ correct: isCorrect });
  }
})();

browser.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  browser.tabs.executeScript(null, {file:"../content.js"});
});
