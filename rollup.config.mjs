import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    input: [
      'src/injectScripts.js',
      'src/lessons/addListenersLesson.js',
      'src/stories/addListenersStory.js',
    ],
    output: {
      dir: '.',
      format: 'es',
    },
    plugins: [commonjs(), nodeResolve()],
  },
];
