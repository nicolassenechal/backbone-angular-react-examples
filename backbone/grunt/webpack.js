var webpack = require('webpack');

module.exports = function (grunt) {
    return {
        dev: {
            resolve: {
                extensions: ['', '.js']
            },
            entry: './src/init.js',
            output: {
                path: './dist',
                filename: 'app.js'
            },
            module: {
                loaders: [
                    {test: /\.css$/, loader: 'style!css'},
                    {test: /\.hbs$/, loader: 'handlebars-loader' },
                    {test: /\.js$/, exclude: /node_modules/, loader: require.resolve('babel-loader')}
                ]
            },
            stats: {
                colors: true
            },
            devtool: 'source-map',
            watch: true,
            keepalive: true
        }
    };
};