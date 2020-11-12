const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 'production' か 'development' を指定
const MODE = "development";

const enabledSourceMap = MODE === "development";

module.exports = {
    mode: MODE,
    entry: `./src/index.js`,
    output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "dist",
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(css|scss$)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            sourceMap: enabledSourceMap,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: enabledSourceMap,
                            postcssOptions: {
                                plugins: [
                                    require("autoprefixer"),
                                ]
                            }
                        }
                    },
                    {
                        loader: "sass-loader",
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
    ],

};