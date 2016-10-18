module.exports = {
  entry: {
    javascript: "./entry.js"
  },
  output: {
    filename: './bundle.js'
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: "json" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
    ]
  }
};
