/* eslint-disable max-len */
function injectScript(src) {
	const script = document.createElement('script');
	script.setAttribute('type', 'module');
	script.src = browser.runtime.getURL(src);
	script.onload = () => script.remove();
	(document.head || document.documentElement).appendChild(script);
}

injectScript('src/lessons/addListenersLesson.js');
injectScript('src/stories/addListenersStory.js');
