const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
const UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin();
const AggressiveMergingPlugin = new webpack.optimize.AggressiveMergingPlugin();

const DefinePlugin = new webpack.DefinePlugin({
    'process.env': {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify('production'),
    },
});

const extractCSS = new ExtractTextPlugin('[name].bundle.css');
const extractSCSS = new ExtractTextPlugin('[name].styles.css');

const config = {
    entry: [
        './src/index.js',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-2'],
                },
            },
            {
                test: /\.s(a|c)ss$/,
                loader: extractSCSS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader'],
                }),
            },
            {
                test: /\.css$/,
                loader: extractCSS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader'],
                }),
            },
        ],
    },
    plugins: [
        extractCSS,
        extractSCSS,
        // CommonsChunkPlugin,
        UglifyJsPlugin,
        AggressiveMergingPlugin,
        DefinePlugin,
    ],
};

module.exports = config;
