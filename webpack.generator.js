const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	configBundle: function (region, port = 3000) {
		return {
			mode: "development",
			entry: {
				main: { import: "./src/index.js", dependOn: "assets_import" },
				assets_import: [
					`./src/components/Float/_import-${region}.js`,
					`./src/components/Frame1/_import-${region}.js`,
					`./src/components/Frame2/_import-${region}.js`,
					`./src/components/HeaderMobile/_import-${region}.js`,
					`./src/components/Footer/_import.js`,
				],
			},
			output: {
				filename: "[name].bundle.js",
				path: path.resolve(__dirname, `build-${region}`),
			},
			plugins: [
				new HTMLWebpackPlugin({
					title: "document",
					filename: `index.html`,
					template: `./src/index-${region}.html`,
				}),

				new webpack.ProvidePlugin({
					$: "jquery",
					jQuery: "jquery",
					"window.jQuery": "jquery",
				}),
			],
			devServer: {
				static: "./dist",
				port: port,
			},
			optimization: {
				splitChunks: {
					chunks: "all",
				},
			},
			devtool: "inline-source-map",
			module: {
				rules: [
					{
						// css
						test: /\.css$/,
						use: ["style-loader", "css-loader"],
					},
					{
						// images
						test: /.(png|jpg|jpeg|svg|gif)$/,
						type: "asset/resource",
						generator: {
							filename: "images/[name][ext]",
						},
					},
					{
						// videos
						test: /\.mp4$/,
						type: "asset/resource",
						generator: {
							filename: "videos/[name][ext]",
						},
					},
					{
						// audio
						test: /\.(mp3|wav)$/,
						type: "asset/resource",
						generator: {
							filename: "audios/[name][ext]",
						},
					},
					{
						test: /\.(ttf|otf)$/,
						type: "asset/resource",
						generator: {
							filename: "fonts/[name][ext]",
						},
					},
				],
			},
		};
	},
};
