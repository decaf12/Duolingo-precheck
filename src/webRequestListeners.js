export function getAnswerKey(details) {   
    let filter = browser.webRequest.filterResponseData(details.requestId);
    let answerkey_JSON;
    
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