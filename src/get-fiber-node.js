/**
 * 
 * @param {Object} obj 
 */
export default function getFiberNode(obj) {
  const [_, node] = Object.entries(obj).find(([key]) => key.startsWith('__reactFiber$'));
  return node;
}
