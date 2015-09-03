import App from '../../app';
import headerController from './show/headerController';

var headerApp = {
    show: function () {
        headerController.show();
    }
};

App.addInitializer(function () {
    headerApp.show();
});

export default headerApp;
