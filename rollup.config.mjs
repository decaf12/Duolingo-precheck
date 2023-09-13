import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    input: [
      'src/lessons/injectScriptLesson.js',
      'src/lessons/addListeners.js',
      'src/stories/injectScriptStory.js',
    ],
    output: {
      dir: '.',
      format: 'es',
    },
    plugins: [commonjs(), nodeResolve()],
  },
];
