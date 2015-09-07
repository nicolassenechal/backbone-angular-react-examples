import HeaderApp from '../HeaderApp.js';

import headerController from '../show/HeaderController.js';

import App from '../../../app.js';

describe('HeaderApp application', function () {

    it('#show calls the controller show function', () => {
        spyOn(headerController, 'show');
        var journey = {};
        HeaderApp.show(journey);
        expect(headerController.show).toHaveBeenCalledWith(journey);
    });

});
