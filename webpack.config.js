var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
	mode: 'production',
  entry: [
    SRC_DIR + "/app/index.js"
  ],
  output: {
  	path: DIST_DIR,
  	filename: "bundle.js",
  	publicPath: "/"
  },
  module: {
  	rules: [
  		{
  			test: /\.js?/,
  			include: SRC_DIR,
  			loaders: "babel-loader",
  			query: {
  				presets: ["react", "env", "stage-2"]
  			}
  		},
      {
        test: /\.css$/,
        include: SRC_DIR,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        include: SRC_DIR,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'images/',
            //name: '[path][name].[ext]',
            name: '[name].[ext]',
            context: ''
          }
        }]
      },
      {
        test: /\.(mp3|wav)$/,
        include: SRC_DIR,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'audio/',
            //name: '[path][name].[ext]',
            name: '[name].[ext]',
            context: ''
          }
        }]
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    historyApiFallback: true
  },
  plugins: [
  	new CopyWebpackPlugin([
      { from: SRC_DIR + '/index.html', to: DIST_DIR },
      { from: SRC_DIR + '/prod-server.js', to: DIST_DIR },
      { from: 'package.json', to: DIST_DIR }
    ])
  ]
};

module.exports = config;