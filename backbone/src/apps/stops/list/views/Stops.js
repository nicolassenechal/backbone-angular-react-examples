import App from '../../../../app';
import Marionette from 'backbone.marionette';
import Stop from'../../show/views/Stop';

var Stops = Marionette.CollectionView.extend({
    className: 'stop-list__ul',
    tagName: 'ul',
    childView: Stop
});

App.reqres.setHandler('list:stops:view', function (entities) {
    return new Stops({
        collection: entities
    });
});

module.exports = Stops;
