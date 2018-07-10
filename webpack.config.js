const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/client/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'env',
            'stage-2',
            'react',
          ],
          plugins: [
            'babel-plugin-transform-react-jsx',
          ],
        },
      },
    ],
  },
}
