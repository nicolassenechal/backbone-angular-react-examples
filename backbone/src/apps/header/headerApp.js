import App from '../../app';
import headerController from './show/HeaderController';

var headerApp = {
    show: function (journey) {
        headerController.show(journey);
    }
};

App.addInitializer(function (options) {
    headerApp.show(options.journey);
});

export default headerApp;
