# Intention

This repository has been created in order to have a minimal FE setup for any application architecture based on web components.
`webpack-dev-server` is loaded so that the Hot Module Reload feature is active (yeah! you can finally see what you're doing in real time).

It uses Sass (with .scss). The style is loaded at each the component level.

Dependencies can be handled by **Yarn**.

See the example in the `src` folder for a basic usage of this starter kit.

## Webpack 2

`npm init -y`
`yarn add --dev webpack`

created `webpack.config.js`

installed in dev dep
`babel-core`
`babel-loader`
`babel-preset-es2015`
`babel-preset-react`
`babel-preset-stage-2`,
`webpack-dev-server`
`serve` (for static files serving) [it may be unecessary]
`node-sass`
`style-loader`
`css-loader`
`sass-loader`


## Webpack 2 configuration
```js
{
    entry: [   
        './src/index.js'  // entry point
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),   // output
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,  // extensions that need to be transpiled
              exclude: [
                  path.resolve(__dirname, 'node_modules') // and those excluded
              ],
              loader: 'babel-loader',
              options: {
                  presets: ['react', 'es2015', 'stage-2']  // what transpiling
              }
            },
            {
                test: /\.scss$/,          // transpile sass
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss', '.css']
    },
    devServer: {     // settings for webpack-dev-server  (Hot Reload Module (HRM) is active by default)
        contentBase: './',
        compress: true,
        port: 8080,
        publicPath: 'http://localhost:8080/dist/',  // used by HRM
        historyApiFallback: true    // used if 404 is not present
    }
};
```
