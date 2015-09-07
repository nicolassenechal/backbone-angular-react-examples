import StopsController from '../StopsController.js';

import App  from '../../../../app';

describe('The StopController object', function () {

    describe('#list',  () => {

        beforeEach(() => {
            this.view = new Backbone.View();
            spyOn(App, 'request').and.returnValue(this.view);
            spyOn(App.content, 'show');
            this.callingPoints = {};
            StopsController.list(this.callingPoints);
        });

        it('requests a Header view', () => {
            expect(App.request).toHaveBeenCalledWith('list:stops:view', this.callingPoints);
        });

        it('applies the Header view in the correct region', () => {
            expect(App.content.show).toHaveBeenCalledWith(this.view);
        });

    });


});
