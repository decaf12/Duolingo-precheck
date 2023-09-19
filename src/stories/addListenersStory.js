import * as constants from './challengeTypeConstants';

const storyFrame = document.createElement('iframe');
storyFrame.style = 'display: none';
document.body.appendChild(storyFrame);
const storyConsole = storyFrame.contentWindow.console;
storyConsole.log('Adding story listeners');

function getChallengeDataStory() {
  const solution = document.querySelector("[class=\"_35e5D\"]");
  const reactFiber = Object.keys(solution).find((s) => s.startsWith('__reactFiber$'));
  return solution[reactFiber].return.memoizedProps.storyElement;
}

const storyChoicesArray = Array.from(document.querySelectorAll(constants.STORY_CHOICE));
storyConsole.log('Story choice array:');
storyConsole.log(storyChoicesArray);
storyChoicesArray.forEach((button) => button.removeAttribute('onclick'));

// document.addEventListener(
//   'click',
//   (e) => {
//     e.preventDefault();
//     e.stopImmediatePropagation();
//     const orig = e.target.closest("[class=\"_35e5D\"]");
//     if (orig !== null) {
//       storyConsole.log(e.target);
//       storyConsole.log(orig);
//       storyConsole.log(e.target.closest("[class=\"_2F0k7 _1o0jr _3j32v\"]"));
//       storyConsole.log(e.target.closest("[class=\"_1Q3F0\"]"));
//     } else {
//       storyConsole.log('Not a button');
//       e.target.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: 'Enter' }));
//     }
//   },
// );

function addStoryListener(challengeData, storyChoice) {
  storyChoice.addEventListener(
    'click',
    (e) => {
      const orig = e.target.closest("[class=\"_35e5D\"]");
      storyConsole.log(orig);
      let pass = true;
      if (orig !== null) {
        pass = false;
      }

      if (!pass) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }
  )
}

function checkStorySubmission(submissionButton) {
  if (submissionButton.innerHTML !== 'Continue') {
    return true;
  }

  const challengeData = getChallengeDataStory();
  if (challengeData === null) {
    return true;
  }
  storyConsole.log(challengeData);
  return false;
}

const observerStory = new MutationObserver(() => {
    challengeData = getChallengeDataStory();
    const matchButtons = document.querySelectorAll(constants.STORY_CHOICE);
    if (matchButtons.length > 0) {
      matchButtons.forEach((x) => addStoryListener(challengeData, x));
    }
  }
);

observerStory.observe(document.body, { childList: true, subtree: true });
