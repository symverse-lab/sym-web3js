var path = require('path');
const webpack = require('webpack');

const browserConfig = {
	entry: path.resolve('./src/index.ts'),
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
	devtool: 'cheap-module-source-map',
	target: 'web',  // 브라우저 타겟 설정
	output: {
		library: 'SymWeb3',
		libraryTarget: 'umd',
		globalObject: 'this',
		path: path.resolve(__dirname, 'dist'),
		filename: 'sym-web3.browser.js',  // 브라우저용 파일명 변경
		libraryExport : "default",
		auxiliaryComment : "symweb3js Comment for Browser",
	},
	optimization: {
	},
	plugins: [
		new webpack.ProvidePlugin({
			process: 'process/browser',
		}),
	],
};

const nodeConfig = {
	entry: path.resolve('./src/index.ts'),
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
	devtool: 'cheap-module-source-map',
	target: 'node',  // 노드 타겟 설정
	output: {
		library: 'SymWeb3',
		libraryTarget: 'umd',
		globalObject: 'this',
		path: path.resolve(__dirname, 'dist'),
		filename: 'sym-web3.js',  // 노드용 파일명 변경
		libraryExport : "default",
		auxiliaryComment : "symweb3js Comment for Node",
	},
	optimization: {
	},
	plugins: [],
};

module.exports = [browserConfig, nodeConfig];  // 두 설정 모두 내보내기