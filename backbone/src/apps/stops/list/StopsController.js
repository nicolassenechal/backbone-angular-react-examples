import {} from './views/stops';
import App  from '../../../app';

var stopsController = {
    list: function () {
        App.vent.on('service:trip:success', function (response) {
            var list = App.request('list:stops:view', response.callingPoints);
            App.content.show(list);
        });
    }
};

export default stopsController;
