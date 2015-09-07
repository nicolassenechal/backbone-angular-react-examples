import {Journey, Stop, StopCollection} from '../TripData.js';

import Backbone from 'backbone';

describe('The TripData module', function () {

    describe('Journey', () => {

        it('extends Backbone.Model', () => {
           expect(new Journey() instanceof Backbone.Model).toBe(true);
        });

        it('parses the data as expected', () => {
           var journey = new Journey({
               origin: 'a',
               destination: 'b'
           }, {
               parse: true
           });
            expect(journey.get('text')).toBe('a to b');
        });

    });

    describe('Stop', () => {

        it('extends Backbone.Model', () => {
            expect(new Stop() instanceof Backbone.Model).toBe(true);
        });

        describe('#parse', () => {

            it('sets the platform number correctly', () => {
                var stop = new Stop({platform: 5}, {parse: true});
                expect(stop.get('platform')).toBe(5);
                stop = new Stop({platform: undefined}, {parse: true});
                expect(stop.get('platform')).toBe('-');
            });

            it('sets the isLate property if required', () => {
                var stop = new Stop({scheduled: '10:10', expected: '10:20'}, {parse: true});
                expect(stop.get('isLate')).toBe(true);
                stop = new Stop({scheduled: '10:10', expected: '10:10'}, {parse: true});
                expect(stop.get('isLate')).toBe(false);
            });

            it('sets the lateness property as expected', () => {
                var stop = new Stop({scheduled: '10:10', expected: '10:20'}, {parse: true});
                expect(stop.get('lateness')).toBe('10 minutes late');
                stop = new Stop({scheduled: '10:10', expected: '10:10'}, {parse: true});
                expect(stop.get('lateness')).toBe('On time');
            });

        });

    });


});