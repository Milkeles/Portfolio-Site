const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/scripts/shared.js', // Your entry point
  output: {
    filename: 'shared.js',
    path: path.resolve(__dirname, 'public/scripts'), // Output directory
  },
  mode: 'production', // Enables minification by default
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
