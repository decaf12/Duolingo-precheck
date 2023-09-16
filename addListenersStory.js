const STORY_CHOICE = "[data-test='stories-choice']";

const storyFrame = document.createElement('iframe');
storyFrame.style = 'display: none';
document.body.appendChild(storyFrame);
const storyConsole = storyFrame.contentWindow.console;
storyConsole.log('Adding story listeners');

const storyChoicesArray = Array.from(document.querySelectorAll(STORY_CHOICE));
storyConsole.log('Story choice array:');
storyConsole.log(storyChoicesArray);
storyChoicesArray.forEach((button) => button.removeAttribute('onclick'));
