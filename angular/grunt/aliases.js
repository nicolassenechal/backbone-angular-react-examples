module.exports = function () {
    'use strict';

    return {
        default: ['test', 'build'],

        vendor: ['clean:vendor', 'bowercopy'],

        jsDev: ['uglify:dev']
    };
};
