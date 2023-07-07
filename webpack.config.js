var path = require("path");

module.exports = {
	entry: "./src/index.ts",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		libraryTarget: "umd",
		globalObject: 'this',
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
};