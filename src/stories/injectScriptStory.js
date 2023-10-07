const storyScript = document.createElement('script');
storyScript.src = browser.runtime.getURL('addListenersStory.js');
storyScript.setAttribute('type', 'module');
// Don't use an arrow function here, otherwise 'this' would have no meaning.
storyScript.onload = function () { this.remove(); };
(document.head || document.documentElement).appendChild(storyScript);
