const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const config = {
    name: "Default Theme",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "assets/js/main.js",
    },

    module: {
        rules: [
            {
                test: /\.png$/,
                loader: "file-loader",
                options: {
                    outputPath: "assets/images",
                    publicPath: "../images",
                    name: "[name].[ext]",
                },
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "assets/css/main.css",
        }),
        new CopyPlugin({
            patterns: [
                {
                    context: path.resolve(__dirname, "src"),
                    from: "**/*.hbs",
                    to: path.resolve(__dirname, "dist"),
                },
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    context: path.resolve(__dirname),
                    from: "config.json",
                    to: path.resolve(__dirname, "dist"),
                },
            ],
        }),
    ],
};

module.exports = merge(commonConfig, config);
