import './views/Header';
import App  from '../../../app';

var headerController = {
    show: function (journey) {
        var header = App.request('show:header:view', journey);
        App.header.show(header);
    }
};

export default headerController;
