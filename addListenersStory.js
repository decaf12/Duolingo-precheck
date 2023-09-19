const STORY_CHOICE = "[data-test='stories-choice']";

const storyFrame = document.createElement('iframe');
storyFrame.style = 'display: none';
document.body.appendChild(storyFrame);
const storyConsole = storyFrame.contentWindow.console;
storyConsole.log('Adding story listeners');

function addStoryListener(storyChoice) {
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
  );
}

const observerStory = new MutationObserver(() => {
    const matchButtons = document.querySelectorAll(STORY_CHOICE);
    if (matchButtons.length > 0) {
      matchButtons.forEach((x) => addStoryListener(x));
    }
  }
);

observerStory.observe(document.body, { childList: true, subtree: true });
