import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

var App = new Marionette.Application();

App.addRegions({
    header: '[data-role=header]',
    content: '[data-role=content]'
});

App.on('start', function (options) {
    if (Backbone.history) {
        Backbone.history.start({ pushState: true });
    }
});

export default App;