var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		library: 'SymWeb3',
		libraryTarget: 'umd',
		globalObject: 'this',
		path: path.resolve(__dirname, 'dist'),
		filename: 'sym-web3.js',
		libraryExport : "default",
		auxiliaryComment : "symweb3js Comment",
		clean: true,
	},
	optimization: {
	},
	plugins: [
		new webpack.ProvidePlugin({
			process: 'process/browser.js',
		}),
	],
};