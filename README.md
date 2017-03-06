# Intention

This repository has been created in order to have a minimal FE setup for any application architecture based on web components.

It uses Sass (with .scss). The style is loaded at each the component level.

Dependencies can be handled by **Yarn**.

See the example in the `src` folder for a basic usage of this starter kit.

TODO
add `style linter`
add `html validator`

HMR doesn't work properly (atm `watchContentBase` is set to `true` as a fallback)

## Usage
`yarn`
`npm start-dev`

## Webpack 2

`npm init -y`
`yarn add --dev webpack`

created `webpack.config.js`

Installed as Dev dependencies
- `babel-core`
- `babel-loader`
- `babel-eslint`
- `babel-preset-es2015`
- `babel-preset-react`
- `babel-preset-stage-2`,
- `webpack-dev-server`
- `serve` (for static files serving) [it may be unecessary]
- `node-sass`
- `style-loader`
- `css-loader`
- `postcss-loader`
- `sass-loader`
- `autoprefixer`
- `eslint`
- `eslint-plugin-import`
- `jest`



## Webpack 2 configuration
```js
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('main.css');
const extractSCSS = new ExtractTextPlugin('styles.css');

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
            {
                test: /\.scss$/,
                loader: extractSCSS.extract(['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'])
            },
            {
                test: /\.css$/,
                loaders: extractCSS.extract(['css-loader', 'postcss-loader'])
            }
        ]
    },
    plugins: [
        extractCSS,
        extractSCSS
    ],
    devServer: {
        // contentBase: './',
        // inline: true,
        hot: true,
        compress: true,
        // port: 8080,
        // publicPath: 'http://localhost:8080/dist/',
        historyApiFallback: true
    }
};

module.exports = config;

```
