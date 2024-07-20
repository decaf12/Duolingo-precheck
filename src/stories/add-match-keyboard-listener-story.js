/* eslint-disable max-len */
import * as constants from './challenge-type-constants';
import * as check from './check-answer';
import getFiberNode from '../get-fiber-node';

document.addEventListener(
  'keydown',
  (e) => {
    if (/^\d$/.test(e.key)) {
      const matchButtonGroup = document.querySelector(constants.MATCH_BUTTON_GROUP);

      if (!matchButtonGroup) {
        return;
      }

      const buttons = Array.from(matchButtonGroup.querySelectorAll('button'));
      if (!buttons?.length) {
        return;
      }

      const pressedButton = buttons.find((button) => {
        const number = button.querySelector(constants.MATCH_BUTTON_NUMBER);
        return number?.innerText === e.key;
      });

      if (!pressedButton) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }

      const parent = pressedButton.closest(constants.STORY_PARENT);

      const storyData = getFiberNode(parent)?.return?.memoizedProps?.bustoryElement;

      if (storyData && !check.markStoryMatch(storyData, pressedButton)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }
  },
);
