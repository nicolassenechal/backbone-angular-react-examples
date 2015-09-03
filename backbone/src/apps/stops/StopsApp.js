import App from '../../app';
import stopsController from './list/stopsController';

var stopsApp = {
    list: function () {
        stopsController.list();
    }
};

App.addInitializer(function () {
    stopsApp.list();
});

export default stopsApp;
