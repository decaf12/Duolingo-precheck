import * as constants from './challenge-type-constants';
import getReactFiber from '../get-react-fiber';
import * as check from './check-answer';

const addStoryListener = (storyChoice) => {
  ['click', 'keydown'].forEach((event) => {
    storyChoice.addEventListener(
      event,
      (e) => {
        const parent = storyChoice.closest(constants.STORY_PARENT);
        if (!parent) {
          return;
        }
        const fiber = getReactFiber(parent);
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

  const matchButtonGroup = document.querySelector(constants.MATCH_BUTTON_GROUP);
  matchButtonGroup?.querySelectorAll('li').forEach(addStoryListener);
});

observerStory.observe(document.body, { childList: true, subtree: true });
