/* eslint-disable max-len */
import * as constants from './challenge-type-constants';
import * as check from './check-answer';
import getReactFiber from '../get-react-fiber';

document.addEventListener(
  'keydown',
  (e) => {
    if (/^\d$/.test(e.key)) {
      const matchButtonGroup = document.querySelector(constants.MATCH_BUTTON_GROUP);

      if (!matchButtonGroup) {
        return;
      }

      const buttons = Array.from(matchButtonGroup.querySelectorAll('button'));
      if (!buttons.length) {
        return;
      }

      const button = buttons.find((x) => {
        const number = x.querySelector(constants.MATCH_BUTTON_NUMBER);
        return number?.innerText === e.key;
      });

      if (!button) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }

      const parent = button.closest(constants.STORY_PARENT);

      const storyData = getReactFiber(parent)?.return?.memoizedProps?.storyElement;

      if (storyData && !check.markStoryMatch(storyData, button)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }
  },
);
