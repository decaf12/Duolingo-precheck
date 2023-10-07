import * as constants from './challengeTypeConstants';
import markStorySubmission from './checkAnswer';
import getReactFiber from '../getReactFiber';

const storyFrame = document.createElement('iframe');
storyFrame.style = 'display: none';
document.body.appendChild(storyFrame);
const storyConsole = storyFrame.contentWindow.console;
storyConsole.log('Adding story listeners');

function addStoryListener(storyChoice) {
  storyChoice.addEventListener(
    'click',
    (e) => {
      const button = e.target;
      const question = button.closest('[class="_35e5D"]').previousSibling;
      const storyData = getReactFiber(question).return.memoizedProps.challengeElement;
      if (!markStorySubmission(storyData, button)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    },
  );
}

const observerStory = new MutationObserver(() => {
  const matchButtons = document.querySelectorAll(constants.STORY_CHOICE);
  if (matchButtons.length > 0) {
    matchButtons.forEach((x) => addStoryListener(x));
  }
});

observerStory.observe(document.body, { childList: true, subtree: true });
