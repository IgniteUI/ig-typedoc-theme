const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
    mode: "development",

    context: path.resolve(__dirname, "src"),

    entry: "./assets/js/src/bootstrap.ts",

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.sass$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "resolve-url-loader",
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                style: "compact",
                                unixNewlines: true,
                            },
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin()
    ],
};

module.exports = config;
