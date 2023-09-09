import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    input: ['src/constants.js'],

    output: {
      dir: '.',
      format: 'es',
    },
    plugins: [commonjs(), nodeResolve()],
  },

  {
    input: ['src/init.js', 'src/content.js'],
    output: {
      dir: '.',
      format: 'es',
    },
    plugins: [commonjs(), nodeResolve()],
  },
];
