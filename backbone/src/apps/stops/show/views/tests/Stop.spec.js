import Stop from '../Stop.js';

import App from '../../../../../app.js';

import Marionette from 'backbone.marionette';
import Backbone from 'backbone';

describe('The Stop view', function () {

    beforeEach(() => {
        this.model = new Backbone.Model();
        this.view = new Stop({
            model: this.model
        });
    });

    it('extends Marionette.ItemView', () => {
        expect(this.view instanceof Marionette.ItemView).toBe(true);
    });

    it('uses the expected tag names', () => {
        expect(this.view.tagName).toBe('li');
    });

    describe('#className', () => {

        it('returns the right value if there is no relevant value in the model', () => {
            expect(this.view.className()).toContain('stop ');
        });

        it('returns the right value if the model has an actual attribute', () => {
            this.model.set('actual', 'abc');
            expect(this.view.className()).toContain('stop--past ');
        });

        it('returns the right value if the model has a first attribute', () => {
            this.model.set('first', 'abc');
            expect(this.view.className()).toContain('stop--first ');
        });

        it('returns the right value if the model has a last attribute', () => {
            this.model.set('last', 'abc');
            expect(this.view.className()).toContain('stop--last ');
        });

    });

});
