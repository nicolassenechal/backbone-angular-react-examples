import Header from '../Header.js';
import App  from '../../../../../app';

import Marionette from 'backbone.marionette';


describe('The Header view', function () {

    beforeEach(() => {
        this.header = new Header();
    })

    it('extends ItemView', () => {
        expect(this.header instanceof Marionette.ItemView).toBe(true);
    });

    it('uses the expected class and tag names', () => {
        expect(this.header.className).toBe('header');
        expect(this.header.tagName).toBe('header');
    });

    it('instance can be requested through App.request', () => {
        var model = new Backbone.Model();
        var header = App.request('show:header:view', model);
        expect(header instanceof Header);
        expect(header.model).toBe(model);
    });

});