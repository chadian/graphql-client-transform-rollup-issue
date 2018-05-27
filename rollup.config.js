import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'main.js',
  output: {
    file: 'bundle.js',
    format: 'umd'
  },
  name: 'MyModule',
  plugins: [
    resolve(),
    commonjs()
  ]
};
