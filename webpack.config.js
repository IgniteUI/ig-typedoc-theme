import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyPlugin from "copy-webpack-plugin";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const config = {
    name: "Default Theme",
    mode: "production",

    output: {
        path: path.resolve(__dirname, "dist/assets"),
        filename: "common.js",
    },


    context: path.resolve(__dirname, "src"),

    entry: [
        "./assets/js/src/versioning/tag-versions.req.js",
        "./assets/js/src/navigation/igviewer.renderingService.js",
        "./assets/js/src/navigation/igviewer.common.js",
        "./assets/js/src/navigation/nav-initializer.js",
        "./assets/js/src/bootstrap.ts",
    ],

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
                test: /\.(sa|sc|c)ss$/,
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
            {
                test: /\.(png|svg)$/,
                loader: "file-loader",
                options: {
                    outputPath: "images",
                    publicPath: "../images",
                    name: "[name].[ext]",
                },
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/main.css",
        }),

        new CopyPlugin({
            patterns: [
                {
                    context: path.resolve(__dirname),
                    from: "*config.json",
                    to: path.resolve(__dirname, "dist"),
                },
            ],
        }),

        new CleanWebpackPlugin()
    ],
};

export default config;
