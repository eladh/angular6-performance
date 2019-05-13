var path = require('path');
var HappyPack = require('happypack');

var useHappyPack = false;

var dummyLoader = {
  loader: 'dummy-loader',
  query: {
    dependency: path.resolve(__dirname, 'dependency.txt')
  }
}

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'dist.webpack.js'
  },
  module: {
    loaders: [
      {
        test: /\.txt$/,
        use: [
          (useHappyPack ? 'happypack/loader' : dummyLoader)
        ]
      }
    ]
  },
  plugins: [
    new HappyPack({
      loaders: [dummyLoader]
    })
  ]
}
