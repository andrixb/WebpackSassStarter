const path = require('path');
// var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');

const config = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            },
            // {
            //     test: /\.scss$/,
            //     use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            // }
            // {
            //     test: /\.scss$/,
            //     loader: ExtractTextPlugin.extract('scss')
            // }


            {
                test: /\.css$/,
                loaders: extractCSS.extract(['css-loader', 'postcss-loader'])
            }
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: 'css-loader'
            //     })
            // }
        ]
    },
    plugins: [
        extractCSS
    ],
    // resolve: {
    //     extensions: ['.js', '.jsx', '.json', '.scss', '.css']
    // },
    // devServer: {
    //     contentBase: './',
    //     // inline: true,
    //     hot: true,
    //     compress: true,
    //     port: 8080,
    //     publicPath: 'http://localhost:8080/dist/',
    //     historyApiFallback: true
    // }
};

module.exports = config;
