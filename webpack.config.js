const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },

module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // fonts 
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: './fonts/[name][ext]'
        }
      },

      //  Image 
        {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: './images/[name][ext]'
        }
      },
      // Sass loader 

      {
        test: /\.(sass|css|scss)$/,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
    
  },
  // Webpack Server 

  devServer: {
    static: {
      directory: path.join(__dirname, '/dist'),
    },
    // compress: true,
    port: 9000,
    // open: true,
    devMiddleware :{
        writeToDisk: true,
        stats: 'errors-only',
      },
  },

  // Webpack Server 

  plugins: [new HtmlWebpackPlugin({
    filename: './index.html',
    template: './src/index.html'
  }),

  new HtmlWebpackPlugin({
    filename: './login.html',
    template: './src/login.html'
  }),
  new HtmlWebpackPlugin({
    filename: './friends.html',
    template: './src/friends.html'
  }),

  
  new MiniCssExtractPlugin({ 
    filename: 'css/main.css',
  }),



]
  ,
  
};