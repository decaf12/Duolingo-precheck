import { getAnswerKey } from "./webRequestListeners";

browser.webRequest.onBeforeRequest.addListener(
  getAnswerKey,
  {urls: ["https://www.duolingo.com/2017-06-30/sessions"]},
  ["blocking"]
);