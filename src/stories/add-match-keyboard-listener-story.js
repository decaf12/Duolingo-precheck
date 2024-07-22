/* eslint-disable max-len */
import * as constants from './challenge-type-constants.js';
import * as check from './check-answer.js';
import getFiberNode from '../get-fiber-node.js';

document.addEventListener(
  'keydown',
  (e) => {
    if (/^\d$/.test(e.key)) {
      const buttons = Array.from(document.querySelectorAll(constants.MATCH_BUTTONS));

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

      const storyData = getFiberNode(parent)?.return?.memoizedProps?.storyElement;

      if (storyData && !check.markStoryMatch(storyData, pressedButton)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }
  },
);
