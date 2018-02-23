const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const extractCss = new ExtractTextPlugin({ filename: 'assets/styles/main.min.css', allChunks: true });
const copyFiles = new CopyWebpackPlugin([{ from: 'src/assets/fonts', to: 'assets/fonts' }, { from: 'src/assets/images', to: 'assets/images' }]);
const writeFiles = new WriteFilePlugin();
const spriteLoader = new SpriteLoaderPlugin();
const hmr = new Webpack.HotModuleReplacementPlugin();
const namedModules = new Webpack.NamedModulesPlugin();

const htmlHome = new HtmlWebpackPlugin({ title: 'Home', hash: true, filename: 'index.html', template: './src/views/index.pug' });
const htmlAbout = new HtmlWebpackPlugin({ title: 'About', hash: true, filename: 'about.html', template: './src/views/about.pug' });

const config = {
    entry: {
        app: './src/js/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015', 'stage-2'],
                },
            },
            {
                test: /\.s(a|c)ss$/,
                use: extractCss.extract({
                    fallback: 'style-loader',
                    use: [{ loader: 'css-loader' }, {loader: 'postcss-loader'}, { loader: 'sass-loader' }],
                }),
            },
            {
                test: /\.pug$/,
                use: [{
                    loader: 'raw-loader'
                }, {
                    loader: 'pug-html-loader'
                }],
            }, {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: path.resolve('./src/assets/svg/sprite'),
                options: {
                    extract: true,
                    spriteFilename: './assets/svg/sprite.svg',
                },
            }, {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=100000'
            }
        ],
    },
    plugins: [
        hmr,
        namedModules,
        extractCss,
        copyFiles,
        writeFiles,
        spriteLoader,
        htmlHome,
        htmlAbout,
    ],

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        open: true,
    },
};

module.exports = config;