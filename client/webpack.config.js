const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "url-loader",
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        "test": /\.(scss|css)$/,
        "use": [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
                ]
      }
    ]
  },
  
  plugins: [new MiniCssExtractPlugin({ filename: "bundle.css" }),
            new HtmlWebpackPlugin({template:'./index.html'}),
            new CopyWebpackPlugin([
              { from: './assets', to: './assets' }
            ])],
  devServer: {
    port: 2000,
    disableHostCheck: true,
    proxy: [
      // allows redirect of requests to webpack-dev-server to another destination
      {
        context: ["/api","/auth"], // can have multiple
        target: "http://localhost:4000", // server and port to redirect to
        secure: false
      }
    ],
    open: true,
    historyApiFallback: true,
    contentBase: "./",
    compress: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};

