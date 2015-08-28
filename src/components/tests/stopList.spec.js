import React from 'react/addons';
import StopList from '../StopList.jsx';
import Stop from '../Stop.jsx';

const TestUtils = React.addons.TestUtils;

const data = [{a: 'A'}, {a: 'B'}, {a: 'C'}];

describe('The StopList Component', function () {

    beforeEach(() => {
        var shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(<StopList callingPoints={data} />);
        this.renderedComponent = shallowRenderer.getRenderOutput();
    });

    it('generates a section dom object', () => {
        expect(this.renderedComponent.type).toEqual('section');
        expect(this.renderedComponent.props.className).toBe('stop-list');
    });

    it('creates a list of 3 Stops', () => {
        var stops = this.renderedComponent.props.children.props.children;
        expect(stops.length).toBe(3);
        expect(stops[0].type).toBe(Stop);
        expect(stops[1].type).toBe(Stop);
        expect(stops[2].type).toBe(Stop);
    });

    it('has a first Stop with props of callingPoint A, first true, last false', () => {
        var stop = this.renderedComponent.props.children.props.children[0];
        expect(stop).toEqual(<Stop callingPoint={{a: 'A'}} first={true} key={0} last={false} />);
    });

    it('has a first Stop with props of callingPoint B, first false, last false', () => {
        var stop = this.renderedComponent.props.children.props.children[1];
        expect(stop).toEqual(<Stop callingPoint={{a: 'B'}} first={false} key={1} last={false} />);
    });

    it('has a first Stop with props of callingPoint C, first false, last true', () => {
        var stop = this.renderedComponent.props.children.props.children[2];
        expect(stop).toEqual(<Stop callingPoint={{a: 'C'}} first={false} key={2} last={true} />);
    });

});


