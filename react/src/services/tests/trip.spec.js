import TripService from '../Trip.js';

describe('The Trip service', function () {

    it('#getTrip returns a promise', () => {
        expect(TripService.getTrip() instanceof Promise).toBe(true);
    });

});