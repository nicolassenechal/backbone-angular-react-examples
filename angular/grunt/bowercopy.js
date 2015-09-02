module.exports = {
    options: {
        runBower: true
    },
    js: {
        options: {
            destPrefix: 'lib'
        },
        files: {
            'angular.js': 'angular/angular.js',
            'moment.js': 'moment/moment.js'
        }
    }
};
