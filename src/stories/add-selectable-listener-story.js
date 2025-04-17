import * as constants from './challenge-type-constants.js';
import getFiberNode from '../get-fiber-node.js';
import * as check from './check-answer.js';

const addStoryListener = (storyChoice) => {
  ['click', 'keydown'].forEach((event) => {
    storyChoice.addEventListener(
      event,
      (e) => {
        const continueButton = document.querySelector('[data-test="stories-player-continue"]:not(:disabled)');
        if (continueButton) {
          return;
        }

        const storyStartButton = document.querySelector('[data-test="story-start"]:not(:disabled)');
        if (storyStartButton) {
          return;
        }

        const parent = storyChoice.closest(constants.STORY_PARENT);
        if (!parent) {
          return;
        }
        const fiber = getFiberNode(parent);
        const storyData = fiber?.return?.memoizedProps?.challengeElement
          ?? fiber?.return?.memoizedProps?.storyElement;
        if (storyData && !check.markStorySubmission(storyData, storyChoice)) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      },
    );
  });
};

const observerStory = new MutationObserver(() => {
  document.querySelectorAll(constants.STORY_SELECTABLES).forEach(addStoryListener);
  document.querySelectorAll(constants.MATCH_BUTTON_GROUP)?.forEach(addStoryListener);
});

observerStory.observe(document.body, { childList: true, subtree: true });
