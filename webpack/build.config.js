let baseConfig = require('./base.config')

let config = {
    mode: 'development',
    entry: './src/evolupage.js',
    output: {
                path: __dirname + '/../build',
                filename: 'main.js'
             },
       }

module.exports = Object.assign(baseConfig, config)


