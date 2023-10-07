import STORY_CHOICE from './challengeTypeConstants';
import markStorySubmission from './checkAnswer';
import getReactFiber from '../getReactFiber';
import newConsole from '../setUpConsole';

newConsole.log('Adding story listeners');

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
  const matchButtons = document.querySelectorAll(STORY_CHOICE);
  if (matchButtons.length > 0) {
    matchButtons.forEach((x) => addStoryListener(x));
  }
});

observerStory.observe(document.body, { childList: true, subtree: true });
