import App from '../App.jsx';
import React from 'react/addons';
import Header from '../Header.jsx';
import TripService from '../../services/Trip.js';

const TestUtils = React.addons.TestUtils;

const data = {
    journey: {
        scheduled: '10:10',
        origin: 'London',
        destination: 'Tumbuctu'
    },
    callingPoints: []
};

describe('The App component', function () {

    describe('contains children', () => {

        beforeEach(() => {
            spyOn(TripService, 'getTrip').and.returnValue(new Promise(resolve => {
                resolve({});
            }));
            this.app = TestUtils.renderIntoDocument(<App />);
            this.renderedComponent = TestUtils.findRenderedDOMComponentWithTag(this.app, 'div');
        });

        it('displays a waiting message if no state is provided', () => {
            expect(this.renderedComponent.getDOMNode().textContent).toBe('Please wait');
        });

        it('displays a Header Component if a state is provided', () => {
            this.app.setState(data);
            expect(TestUtils.scryRenderedDOMComponentsWithTag(this.app, 'header').length).toBe(1);
        });

        it('displays a StopList Component if a state is provided', () => {
            this.app.setState(data);
            expect(TestUtils.scryRenderedDOMComponentsWithTag(this.app, 'section').length).toBe(1);
        });
    });

    describe('updates its state', () => {

        it('when it receives an update from the service', (done) => {
            spyOn(TripService, 'getTrip').and.returnValue(new Promise(resolve => {
                resolve(data);
            }).then(() => {
                expect(this.app.state).toEqual(data);
                done();
            }));
            TestUtils.renderIntoDocument(<App />);
        });
    });

});