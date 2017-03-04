var path = require('path');

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
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss', '.css']
    },
    devServer: {
        contentBase: './',
        compress: true,
        port: 8080,
        publicPath: 'http://localhost:8080/dist/',
        historyApiFallback: true
    }
};

module.exports = config;
