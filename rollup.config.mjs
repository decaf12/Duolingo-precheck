import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    input: ['src/injectScript.js', 'src/addListeners.js'],
    output: {
      dir: '.',
      format: 'es',
    },
    plugins: [commonjs(), nodeResolve()],
  },
];
