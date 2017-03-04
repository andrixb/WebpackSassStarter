# Intention

This repository has been created in order to have a minimal FE setup for any application architecture based on web components.

It uses Sass (with .scss). The style is loaded at each the component level.

Dependencies can be handled by **Yarn**.

See the example in the `src` folder for a basic usage of this starter kit.

TODO
add `jest`
add `style linter`
add `html validator`


# Extract Text Plugin doesn't extract style to styel.css



## Usage
`yarn`
`npm start`

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



## Webpack 2 configuration
```js
var path = require('path');
var webpack = require('webpack');

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
                use: [ 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader' ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss', '.css']
    },
    devServer: {
        contentBase: './',
        inline: true,
        hot: true,
        compress: true,
        port: 8080,
        publicPath: 'http://localhost:8080/dist/',
        historyApiFallback: true
    }
};

module.exports = config;

```
