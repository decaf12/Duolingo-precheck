import * as constants from './challenge-type-constants.js';
import getFiberNode from '../get-fiber-node.js';
import * as check from './check-answer.js';

const addStoryListener = (storyChoice) => {
  ['click', 'keydown'].forEach((event) => {
    storyChoice.addEventListener(
      event,
      (e) => {
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

const selectables = [constants.STORY_CHECKBOX, constants.STORY_CHOICE, constants.STORY_TOKENS];

const observerStory = new MutationObserver(() => {
  selectables.forEach((selector) => document.querySelectorAll(selector).forEach(addStoryListener));

  document.querySelectorAll(constants.MATCH_BUTTON_GROUP)?.forEach(addStoryListener);
});

observerStory.observe(document.body, { childList: true, subtree: true });
