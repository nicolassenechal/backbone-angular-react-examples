var webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: [
        './src/app.js'
    ],
    output: {
        path: './dist/js/',
        filename: 'app.js',
        publicPath: '/dist/js/'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }
        ]
    },
    stats: {
        colors: true
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};
