const s = document.createElement('script');
s.src = chrome.runtime.getURL('content.js');
// Don't use an arrow function here, otherwise 'this' would have no meaning.
s.onload = function () { this.remove(); };
(document.head || document.documentElement).appendChild(s);
