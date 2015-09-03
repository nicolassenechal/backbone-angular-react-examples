import {} from './views/header';
import App  from '../../../app';

var headerController = {
    show: function () {
        App.vent.on('service:trip:success', function (response) {
            var header = App.request('show:header:view', response.journey);
            App.header.show(header);
        });
    }
};

export default headerController;
