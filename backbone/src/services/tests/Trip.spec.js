import Trip from '../Trip.js';

import App from '../../app.js';

describe('the Trip service', function () {

    it('#getTrip returns a promise', () => {
        expect(Trip.getTrip() instanceof Promise).toBe(true);
    });

    it('instance can be requested through App.request', () => {
        var service = App.request('service:trip');
        expect(service instanceof Promise).toBe(true);
    });

});