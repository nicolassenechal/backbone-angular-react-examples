import React from 'react/addons';
import Header from '../Header.jsx';

const TestUtils = React.addons.TestUtils;

describe('Header Component', function () {

    beforeEach(() => {
        var shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(<Header scheduled='10:10' origin='London' destination='Tumbuctu' />);
        this.renderedComponent = shallowRenderer.getRenderOutput();
    });

    it('generates the expected dom element', () => {
        expect(this.renderedComponent.type).toBe('header');
    });

    it('displays the scheduled time passed through the props', () => {
        expect(this.renderedComponent.props.children[0]).toEqual(<span>10:10</span>);
    });

    it('displays the origin and destination passed through the props', () => {
        expect(this.renderedComponent.props.children[1]).toEqual(<span>London to Tumbuctu</span>);
    });

});