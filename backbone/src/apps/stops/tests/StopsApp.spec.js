import StopsApp from '../StopsApp.js';

import stopsController from '../list/StopsController.js';

import App from '../../../app.js';

describe('HeaderApp application', function () {

    it('#list calls the controller list function', () => {
        spyOn(stopsController, 'list');
        var callingPoints = {};
        StopsApp.list(callingPoints);
        expect(stopsController.list).toHaveBeenCalledWith(callingPoints);
    });

});
