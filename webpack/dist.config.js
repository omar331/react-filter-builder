let baseConfig = require('./base.config')

const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

let config = {
            mode: 'development',
            entry: {
                index: './src/main_DIST.js',
            },
            output: {
                    path: __dirname + '/../dist',
                    filename: 'main.js',
                    // filename: '[name].bundle.js',
                    // chunkFilename: '[name].bundle.js',
                },
            plugins: [
                new HtmlWebpackPlugin(),
            ],
}

module.exports = Object.assign(baseConfig, config)


