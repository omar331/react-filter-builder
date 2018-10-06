var webpack = require('webpack');

let baseConfig = require('./base.config')

let config = {
            mode: 'development',
            output: {
                    path: __dirname + '/dev',
                    filename: 'main.js'
                },
                devtool: 'source-map',
                devServer: {
                    contentBase: 'dev/',
                    hot: true,
                    port: 7000,
                    host: "0.0.0.0"
                }
            }

module.exports = Object.assign(baseConfig, config)


