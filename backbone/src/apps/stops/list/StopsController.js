import './views/Stops';
import App  from '../../../app';

var stopsController = {
    list: function (callingPoints) {
        var list = App.request('list:stops:view', callingPoints);
        App.content.show(list);
    }
};

export default stopsController;
