import React from 'react/addons';
import Header from '../Header.jsx';

const TestUtils = React.addons.TestUtils;

describe('Header Component', function () {

    beforeEach(() => {
        var shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(<Header destination='Tumbuctu'
                                       origin='London'
                                       scheduled='10:10'
        />);
        this.renderedComponent = shallowRenderer.getRenderOutput();
    });

    it('generates the expected dom element', () => {
        expect(this.renderedComponent.type).toBe('header');
        expect(this.renderedComponent.props.className).toBe('header');
    });

    it('displays the scheduled time passed through the props', () => {
        expect(this.renderedComponent.props.children[0]).toEqual(<span className='header__span--time'><strong>10:10</strong></span>);
    });

    it('displays the origin and destination passed through the props', () => {
        expect(this.renderedComponent.props.children[1]).toEqual(<span className='header__span--trip'>London to Tumbuctu</span>);
    });

});