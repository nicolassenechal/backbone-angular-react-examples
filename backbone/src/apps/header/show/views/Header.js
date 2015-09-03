import template from '../templates/header.hbs';
import Marionette from 'backbone.marionette';
import App  from '../../../../app';

var Header = Marionette.ItemView.extend({
    template: template,
    className: 'header',
    tagName: 'header'
});

App.reqres.setHandler('show:header:view', function (model) {
    return new Header({model: model});
});

export default Header;
