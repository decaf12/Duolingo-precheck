const lessonScript = document.createElement('script');
lessonScript.src = browser.runtime.getURL('addListenersLesson.js');
lessonScript.setAttribute('type', 'module');
// Don't use an arrow function here, otherwise 'this' would have no meaning.
lessonScript.onload = function () { this.remove(); };
(document.head || document.documentElement).appendChild(lessonScript);

const storyScript = document.createElement('script');
storyScript.src = browser.runtime.getURL('addListenersStory.js');
storyScript.setAttribute('type', 'module');
storyScript.onload = function () { this.remove(); };
(document.head || document.documentElement).appendChild(storyScript);
