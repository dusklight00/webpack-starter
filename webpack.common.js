module.exports = {
  entry: {
    main: './src/index.js',
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
};
