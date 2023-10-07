import { g as getReactFiber } from './getReactFiber-3b77e72b.js';

const STORY_CHOICE = "[data-test='stories-choice']";

function markStorySubmission(storyData, button) {
  switch (storyData.type) {
    case 'MULTIPLE_CHOICE': {
      const answerArray = storyData.answers;
      const correctID = storyData.correctAnswerIndex;
      const buttonText = button.nextElementSibling.textContent;
      const correctText = answerArray[correctID].text;
      return correctText === buttonText;
    }

    case 'SELECT_PHRASE': {
      const answerArray = storyData.answers;
      const correctID = storyData.correctAnswerIndex;
      const correctText = answerArray[correctID];
      const buttonText = button.innerText;
      return correctText === buttonText;
    }

    default:
      return false;
  }
}

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
  const matchButtons = document.querySelectorAll(STORY_CHOICE);
  if (matchButtons.length > 0) {
    matchButtons.forEach((x) => addStoryListener(x));
  }
});

observerStory.observe(document.body, { childList: true, subtree: true });
