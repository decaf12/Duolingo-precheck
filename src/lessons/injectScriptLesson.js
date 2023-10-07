const lessonScript = document.createElement('script');
lessonScript.src = browser.runtime.getURL('addListenersLesson.js');
lessonScript.setAttribute('type', 'module');
// Don't use an arrow function here, otherwise 'this' would have no meaning.
lessonScript.onload = function () { this.remove(); };
(document.head || document.documentElement).appendChild(lessonScript);
