let entrypoint = process.env.ENTRYPOINT

module.exports = {
    mode: 'none',
    entry: entrypoint,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react','env'],
                }
            },
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.(ico|png|jpg|gif|svg|eot|ttf|woff|woff2)(\?.+)?$/, loader: 'url-loader'}
        ]
    }
}

