import App from '../../app';
import stopsController from './list/stopsController';

var stopsApp = {
    list: function (callingPoints) {
        stopsController.list(callingPoints);
    }
};

App.addInitializer(function (options) {
    stopsApp.list(options.callingPoints);
});

export default stopsApp;
