const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  
  
    entry: {      
      app: './src/index.js'
    },
    
    module: {
           rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader',
            ],
          },
       ],
     },
    plugins: [
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
        title: 'Development',
      }),  
    ],
    output: {
      filename: '[name].bundle.js',
      path: __dirname + '/dist',
    },
  };

