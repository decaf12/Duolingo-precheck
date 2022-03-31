import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: ['src/background.js', 'src/constants.js'],
    output: {
      dir: '.',
      format: 'es'
    },
    plugins: [commonjs(), nodeResolve()]
  },
  
  {
    input: ['src/content.js'],
    output: {
      dir: '.',
      format: 'es'
    }
  }
];