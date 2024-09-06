const path = require('path');
const sveltePreprocess = require('svelte-preprocess');
const { svelte } = require('@sveltejs/vite-plugin-svelte');

module.exports = {
  mode: 'production', // Change to 'production' for production builds
  entry: './src/card-wrapper.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            preprocess: sveltePreprocess(),
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
    },
    extensions: ['.mjs', '.js', '.svelte'],
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new (require('html-webpack-plugin'))({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};
