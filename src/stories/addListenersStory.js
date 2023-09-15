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

document.addEventListener(
  'click',
  async (e) => {
    storyConsole.log(e.target);
  },
);

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
