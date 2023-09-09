import makeSubmission from './makeSubmission';
import * as constants from './challengeTypeConstants';
import * as check from './checkAnswers';


const frame = document.createElement('iframe');
frame.style = "border: 0";
document.body.appendChild(frame);
frame.contentWindow.console.log('Content script running');

// Check user submission whenever the Enter key is pressed
document.addEventListener(
  'keydown',
  async (e) => {
    if (e.key === 'Enter') {
      // If the button is "Check" then do not propagate the keypress.
      e.preventDefault();
      e.stopImmediatePropagation();

      const solution = document.querySelector(".mQ0GW");

      const reactFiber = Object.keys(solution).find((s) => s.startsWith('__reactFiber$'));
      const answerKey = solution[reactFiber].return.return.stateNode.props.currentChallenge;
      frame.contentWindow.console.log(answerKey);
            
      const [challengePrompt, answer, challengeType] = makeSubmission();
      
      let isCorrect;
      if (answerKey.grader.vertices !== null) {
        frame.contentWindow.console.log("Has vertices");
        isCorrect = check.gradeTranslation(answer, answerKey.grader.vertices);
      }
      // const marking = await browser.runtime.sendMessage({
      //   challengePrompt,
      //   answer,
      //   challengeType,
      // });

      frame.contentWindow.console.log(isCorrect);
      if (isCorrect) {
        frame.contentWindow.console.log("Correct");
        const submissionButton = document.querySelector(constants.SUBMISSION_BUTTON);
        submissionButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      }
    }
  },
);

function addSubmissionListener(button) {
  button.addEventListener('click', async (e) => {
    const previouslyClicked = document.querySelector(constants.MATCH_BUTTON_SELECTED);
    if (!previouslyClicked) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();

    const previousText = previouslyClicked.querySelector(constants.MATCH_BUTTON_TEXT).textContent;
    const currentButton = button.textContent;
    const buttonNumber = currentButton.slice(0, 1);
    const currentText = currentButton.slice(1);

    const [challengePrompt, answer, challengeType] = makeSubmission({ previousText, currentText });
    const marking = await browser.runtime.sendMessage({
      challengePrompt,
      answer,
      challengeType,
    });

    if (marking.correct) {
      document.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: buttonNumber }));
    }
  });
}

const observer = new MutationObserver(() => {
  if (document.querySelector(constants.MATCH_BUTTONS)) {
    const matchButtons = document.querySelectorAll(constants.MATCH_BUTTONS);
    matchButtons.forEach(addSubmissionListener);
  }
});

observer.observe(document.body, { childList: true, subtree: true });
