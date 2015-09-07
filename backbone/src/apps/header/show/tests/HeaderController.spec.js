import HeaderController from '../HeaderController.js';

import App  from '../../../../app';

import Backbone from 'backbone';

describe('The HeaderController object', function () {

    describe('#show',  () => {

        beforeEach(() => {
            this.view = new Backbone.View();
            spyOn(App, 'request').and.returnValue(this.view);
            spyOn(App.header, 'show');
            this.journey = {};
            HeaderController.show(this.journey);
        });

        it('requests a Header view', () => {
            expect(App.request).toHaveBeenCalledWith('show:header:view', this.journey);
        });

        it('applies the Header view in the correct region', () => {
            expect(App.header.show).toHaveBeenCalledWith(this.view);
        });
    });

});
