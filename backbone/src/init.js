import App from './app';
import './apps/header/HeaderApp';
import './apps/stops/StopsApp';
import './services/Trip.js';
import './entities/TripData.js';

App.request('service:trip').then(function (response) {
    var journey = App.request('new:journey:entities', response);
    var callingPoints = App.request('new:callingPoints:entities', response);
    App.start({
        journey: journey,
        callingPoints: callingPoints
    });
});
