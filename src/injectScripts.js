/* eslint-disable max-len */
function injectScript(src) {
	const script = document.createElement('script');
	script.setAttribute('type', 'module');
	script.src = chrome.runtime.getURL(src);
	script.onload = () => script.remove();
	const injectedScript = (document.head || document.documentElement).appendChild(script);
	console.log('Injected script');
	console.log(injectedScript);
}

injectScript('src/lessons/addListenersLesson.js');
injectScript('src/stories/addListenersStory.js');
