export default [
  {
    input: ['src/background.js', 'src/constants.js'],
    output: {
      dir: '.',
      format: 'es'
    }
  },
  
  {
    input: ['src/content.js', 'src/constants.js'],
    output: {
      dir: '.',
      format: 'es'
    }
  }
];