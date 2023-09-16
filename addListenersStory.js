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

document.addEventListener(
  'click',
  (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    const orig = e.target.closest("[class=\"_35e5D\"]");
    if (orig !== null) {
      storyConsole.log(e.target);
      storyConsole.log(orig);
      storyConsole.log(e.target.closest("[class=\"_2F0k7 _1o0jr _3j32v\"]"));
      storyConsole.log(e.target.closest("[class=\"_1Q3F0\"]"));
    } else {
      storyConsole.log('Not a button');
      e.target.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: 'Enter' }));
    }
  },
);
