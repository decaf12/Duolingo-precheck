const fakeFrame = document.createElement('iframe');
fakeFrame.style.display = 'none';
document.body.appendChild(fakeFrame);
const newConsole = fakeFrame.contentWindow.console;

export default newConsole;
