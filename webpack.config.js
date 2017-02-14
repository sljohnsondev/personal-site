module.exports = {
  entry: './app',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.(png|jpg)$/, loader: "url-loader?limit=5000" },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]
  },
  devServer: {
    contentBase: './public',
    inline: true
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.css', '.scss']
  },
}
