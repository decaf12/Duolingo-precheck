export default function getFiberNode(obj) {
  const key = Object.keys(obj).find((s) => s.startsWith('__reactFiber$'));
  return obj[key];
}
