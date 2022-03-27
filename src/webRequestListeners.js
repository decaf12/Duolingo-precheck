export function getAnswerKey(details) {
    console.log("Loading url: " + details.url);
    console.log("Loading ip: " + details.ip);
    console.log("Request id: " + details.requestId);
    
    let filter = browser.webRequest.filterResponseData(details.requestId);
    let answerkey_JSON;
    
    filter.onstart = event => {
      console.log("started");
      answerkey_JSON = "";
     }

     filter.ondata = event => {
       console.log("receiving data from url: " + details.url + ", size:" + event.data.byteLength);
       let decoder = new TextDecoder("utf-8");
       answerkey_JSON += decoder.decode(event.data);
       filter.write(event.data);
     }
     filter.onstop = event => {
       console.log("finished from url: " + details.url);
       console.log("Answer key: " + answerkey_JSON);
       let answerkey = JSON.parse(answerkey_JSON).challenges[0].compactTranslations;
       console.log("Answer key JSON: " + answerkey)
       filter.disconnect();
     }
}

const foo = 42;