import template from '../templates/stop.hbs';
import Marionette from 'backbone.marionette';
import App  from '../../../../app';

var Stop = Marionette.ItemView.extend({
    template: template,
    tagName: 'li',
    className: function () {
        var cn = 'stop ';
        cn += (!!this.model.get('actual')) ? 'stop--past ' : '';
        cn += (this.model.get('first')) ? 'stop--first ' : '';
        cn += (this.model.get('last')) ? 'stop--last ' : '';
        return cn;
    }
});

export default Stop;
