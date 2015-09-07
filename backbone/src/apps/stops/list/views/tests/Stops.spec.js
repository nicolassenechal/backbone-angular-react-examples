import Stops from '../Stops.js';
import Stop from'../../../show/views/Stop';

import App from '../../../../../app.js';

import Marionette from 'backbone.marionette';
import Backbone from 'backbone';

describe('The Stops view', function () {

    beforeEach(() => {
        this.view = new Stops();
    });

    it('extends Marionette.CollectionView and uses the expected type of child items', () => {
        expect(this.view instanceof Marionette.CollectionView).toBe(true);
        expect(this.view.childView).toBe(Stop);
    });

    it('uses the expected class and tag names', () => {
        expect(this.view.className).toBe('stop-list__ul');
        expect(this.view.tagName).toBe('ul');
    });

    it('instance can be requested through App.request', () => {
        var entities = [{
            id: 'a'
        }, {
            id: 'b'
        }];
        var stops = App.request('list:stops:view', entities);
        expect(stops instanceof Stops);
        expect(stops.collection.length).toBe(2);
    });

});
