module.exports = {
    ui: {
        options: {
            atBegin: true,
            spawn: false
        },
        files: [
            'src/**/*'
        ],
        tasks: ['uglify']
    }
};
