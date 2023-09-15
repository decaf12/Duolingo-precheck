const storyScript = document.createElement('script');
storyScript.src = chrome.runtime.getURL('addListenersStory.js');
// Don't use an arrow function here, otherwise 'this' would have no meaning.
storyScript.onload = function () { this.remove(); };
(document.head || document.documentElement).appendChild(storyScript);
