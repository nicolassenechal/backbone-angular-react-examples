var files = {
    'dist/app.js': [
        'lib/*.js',
        'src/**/*.js'
    ]
};

module.exports = {
    dev: {
        options: {
            sourceMap: true,
            compress: false
        },
        files: files
    }
};
