const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {

    entry: './src/js/index.js',

    output: {

        publicPath: '/',
        path: path.resolve(__dirname, 'constr'),
        filename: 'js/constr.js',
    },

    module: {
        rules: [{
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
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: "fonts",
                }
            }, {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: "images",
                    }
                }, ],
            },

            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],


    },

    devServer: {
        contentBase: path.join(__dirname, 'constr'),
        port: 8080,
        writeToDisk: true,
        stats: "errors-only",
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),

        new HtmlWebpackPlugin({
            template: './src/book1.html',
            filename: 'book1.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/book2.html',
            filename: 'book2.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/book3.html',
            filename: 'book3.html'
        }),

        new MiniCssExtractPlugin(

        )
    ],


};