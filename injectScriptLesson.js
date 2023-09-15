const lessonScript = document.createElement('script');
lessonScript.src = chrome.runtime.getURL('addListenersLesson.js');
// Don't use an arrow function here, otherwise 'this' would have no meaning.
lessonScript.onload = function () { this.remove(); };
(document.head || document.documentElement).appendChild(lessonScript);
