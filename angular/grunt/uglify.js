var files = {
    'dist/app.js': [
        'lib/*.js',
        'js/*.js'
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
