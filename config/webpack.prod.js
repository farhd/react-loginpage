'use strict';
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'babel-polyfill',
		path.join(__dirname, '../src/index.js')
	],
	output: {
		path: path.join(__dirname, '../dist/'),
		filename: '[name].min.js',
		publicPath: ''
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: 'body',
			filename: 'index.html'
		}),
		new ExtractTextPlugin('[name].min.css'),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false,
				screw_ie8: true
			}
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				enforce: "pre",
				exclude: /node_modules/,
				loader: "eslint-loader",
				options: {
					configFile: '.eslintrc',
					failOnWarning: false,
					failOnError: false
				}
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['react', 'es2015', 'stage-2']
				}
			},
			{
				test: /\.css$/,
        include: [
					/bootstrap/,
					/font-awesome/,
				],
				loader: ExtractTextPlugin.extract('css-loader?modules=false&importLoaders=1!postcss-loader')
			},
			{
				test: /\.css$/,
        exclude: [
					/bootstrap/,
					/font-awesome/,
				],
				loader: ExtractTextPlugin.extract('css-loader?modules=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css-loader?modules=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader!postcss-loader')
      },

      {
        test: /\.(ttf|otf|eot|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
			},

      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader?name=img/[sha512:hash:base64:7].[ext]', {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // Specifying webp here will create a WEBP version of your JPG/PNG images
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
		]
	}
};
