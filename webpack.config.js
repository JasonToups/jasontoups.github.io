const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle filename
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transpile JavaScript and JSX files
        exclude: /node_modules\/(?!(@splinetool\/react-spline)\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML template
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Serve content from the 'dist' directory
    port: 3000, // Port for development server
  },
};
