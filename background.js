 function logURL(details) {
   if (/^https:\/\/www.duolingo.com\//.test(details.url))
   {
     console.log("Loading url: " + details.url);
     console.log("Loading ip: " + details.ip);
     console.log("Request id: " + details.requestId);
     
     let filter = browser.webRequest.filterResponseData(details.requestId);
     
     filter.onstart = event => {
       console.log("started");
      }
      filter.ondata = event => {
        console.log("receiving data from url: " + details.url + ", size:" + event.data.byteLength);
        filter.write(event.data);
      }
      filter.onstop = event => {
        console.log("finished");
        filter.disconnect();
      }

      console.log("filter status: " + filter.status);
   }
}

browser.webRequest.onBeforeRequest.addListener(
  logURL,
  {urls: ["<all_urls>"]},
  ["blocking"]
);


// function listener(details) {
//   let filter = browser.webRequest.filterResponseData(details.requestId);

//   filter.onstart = event => {
//     console.log("started");
//   }

//   filter.ondata = event => {
//     console.log(event.data);
//     filter.write(event.data);
//   }

//   filter.onstop = event => {
//     console.log("finished");
//     filter.disconnect();
//   }
// }

// browser.webRequest.onResponseStarted.addListener(
//   listener,
//   {urls: [
//     "<all_urls>", 
//   ], types: ["main_frame"]}
// );