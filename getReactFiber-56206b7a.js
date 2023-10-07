const fakeFrame = document.createElement('iframe');
fakeFrame.style.display = 'none';
document.body.appendChild(fakeFrame);
const newConsole = fakeFrame.contentWindow.console;

function getReactFiber(obj) {
  const key = Object.keys(obj).find((s) => s.startsWith('__reactFiber$'));
  return obj[key];
}

export { getReactFiber as g, newConsole as n };
