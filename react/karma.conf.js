module.exports = function (config) {
    config.set({

        browsers: ['PhantomJS'],

        frameworks: ['jasmine'],

        files: [
            'node_modules/babel-core/browser-polyfill.js',
            'src/**/*.spec.js'
        ],

        preprocessors: {
            'src/**/*.spec.js': ['webpack', 'sourcemap']
        },

        webpack: {
            resolve: {
                extensions: ['', '.js', '.jsx']
            },
            module: {
                loaders: [
                    {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'}
                ]
            },
            stats: {
                colors: true
            },
            devtool: 'inline-source-map'
        },

        webpackMiddleware: {
            noInfo: true
        },

        reporters: ['mocha'],

        mochaReporter: {
            output: 'full'
        }
    });
};
