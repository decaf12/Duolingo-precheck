/* eslint-disable max-len */
function injectScript(src) {
  const script = document.createElement('script');
  script.setAttribute('type', 'module');
  script.src = browser.runtime.getURL(src);
  script.onload = () => script.remove();
  (document.head || document.documentElement).appendChild(script);
}

injectScript('src/lessons/add-listeners-lesson.js');
injectScript('src/lessons/add-listeners-match.js');
injectScript('src/stories/add-match-keyboard-listener-story.js');
injectScript('src/stories/add-selectable-keyboard-listener-story.js');
