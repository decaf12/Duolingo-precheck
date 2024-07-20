import * as constants from '../challenge-type-constants';

export const getButton = (key) => {
  const buttons = Array.from(document.querySelectorAll(constants.MATCH_BUTTONS));

  return buttons.find((x) => {
    const number = x.querySelector(constants.MATCH_BUTTON_NUMBER);
    return number?.innerText === key;
  });
};

export default getButton;
