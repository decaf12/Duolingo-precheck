const storyFrame = document.createElement('iframe');
storyFrame.style = 'display: none';
document.body.appendChild(storyFrame);
const storyConsole = storyFrame.contentWindow.console;
storyConsole.log('Adding story listeners');

document.addEventListener(
  'click',
  async (e) => {
    storyConsole.log(e.target);
    storyConsole.log(e.target.closest("[class=\"_35e5D\"]"));
  },
);
