const path = require('path')

module.exports = {
  module: {
    rules: [
      { test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  },
  entry: './index.js',
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  externals: {
    domino: 'domino'
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/public/',
    path: path.resolve(__dirname, 'dist')
  }
}

if (process.env.WEBPACK_SERVE) {
  const serveConfig = require('tram-dev-server-config')
  module.exports.serve = Object.assign({}, serveConfig, {
    content: './',
  })
}
