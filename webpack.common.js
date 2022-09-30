module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js',
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
