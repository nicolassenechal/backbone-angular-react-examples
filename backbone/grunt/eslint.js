module.exports = function () {

    return {
        options: {
            configFile: '.eslintrc'
        },
        target: [
            'src/**/*.js',
            'Gruntfile.js',
            'grunt/*.js'
        ]
    };

};
