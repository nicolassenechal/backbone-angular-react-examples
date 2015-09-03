import {} from '../../services/Trip.js';
import {} from '../../entities/TripData.js';

import App from '../../app';

App.addInitializer(function () {
    App.request('service:trip').then(function (response) {
        var journey = App.request('new:journey:entities', response);
        var callingPoints = App.request('new:callingPoints:entities', response);
        App.vent.trigger('service:trip:success', {
            journey: journey,
            callingPoints: callingPoints
        });
    });
});