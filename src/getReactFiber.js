export default function getReactFiber(obj) {
  const key = Object.keys(obj).find((s) => s.startsWith('__reactFiber$'));
  return obj[key];
}
