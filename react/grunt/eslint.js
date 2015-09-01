module.exports = function () {

    return {
        options: {
            configFile: '.eslintrc'
        },
        target: [
            'src/**/*.js',
            'src/**/*.jsx',
            'Gruntfile.js',
            'grunt/*.js'
        ]
    };

};
