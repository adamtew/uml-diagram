const path = require('path');

module.exports = {
  context: __dirname + "/",

  entry: {
    javascript: "./src/index.js",
    html: "./index.html",
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]",
      },
      {
        test: /\.css$/, loader: "style-loader!css-loader",
      },
    ],
  },
}
