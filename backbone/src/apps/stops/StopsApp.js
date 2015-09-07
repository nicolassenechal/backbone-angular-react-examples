import App from '../../app';
import stopsController from './list/StopsController';

var stopsApp = {
    list: function (callingPoints) {
        stopsController.list(callingPoints);
    }
};

App.addInitializer(function (options) {
    stopsApp.list(options.callingPoints);
});

export default stopsApp;
