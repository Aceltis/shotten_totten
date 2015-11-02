module.exports = {
  entry: './public/app.jsx',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    filename: 'app.js'
  },
  module: {
    loaders:[
      { test: /\.js$/, exclude: /node_modules/, loader: "babel"},
    ]
  }
};