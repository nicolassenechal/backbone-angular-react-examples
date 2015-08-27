import React from 'react/addons';
import Stop from '../Stop.jsx';

const TestUtils = React.addons.TestUtils;

describe('The Stop component', function () {

    /*eslint complexity:0*/
    const getComponent = (props) => {

        props = props || {};

        var callingPoint = {
            station: 'London',
            platform: (props.platform || undefined),
            scheduled: '10:10',
            actual: (props.actual || undefined),
            expected: (props.expected || '10:10')
        };
        return (<Stop callingPoint={callingPoint}
                    first={props.first || false}
                    last={props.last || false}

            />);
    };

    beforeEach(() => {
        this.shallowRenderer = TestUtils.createRenderer();
    });

    it('shows the stop station, scheduled time and platform and if the train is on time', () => {
        this.shallowRenderer.render(getComponent({
            platform: 3
        }));
        var renderedComponent = this.shallowRenderer.getRenderOutput();
        expect(renderedComponent).toEqual(<li className=''>
            <div>
                <span>10:10</span>
            </div>
            <div>
                <span>London</span>
                <span>On time</span>
                <span>Platform <bold>3</bold></span>
            </div>
        </li>);
    });

    it('uses - if the platform is not specified', () => {
        this.shallowRenderer.render(getComponent());
        var renderedComponent = this.shallowRenderer.getRenderOutput();
        expect(renderedComponent).toEqual(<li className=''>
            <div>
                <span>10:10</span>
            </div>
            <div>
                <span>London</span>
                <span>On time</span>
                <span>Platform <bold>-</bold></span>
            </div>
        </li>);
    });

    it('has a class of start if props.first is true', () => {
        this.shallowRenderer.render(getComponent({
            first: true
        }));
        var renderedComponent = this.shallowRenderer.getRenderOutput();
        expect(renderedComponent.props.className).toContain('first');
    });

    it('has a class of last if props.last is true', () => {
        this.shallowRenderer.render(getComponent({
            last: true
        }));
        var renderedComponent = this.shallowRenderer.getRenderOutput();
        expect(renderedComponent.props.className).toContain('last');
    });

    it('has a class of past if the train has passed the stop', () => {
        this.shallowRenderer.render(getComponent({
            actual: '10:20'
        }));
        var renderedComponent = this.shallowRenderer.getRenderOutput();
        expect(renderedComponent.props.className).toContain('past');
    });


    it('mentions how late the train is when late', () => {
        this.shallowRenderer.render(getComponent({
            platform: 3,
            expected: '10:20'
        }));
        var renderedComponent = this.shallowRenderer.getRenderOutput();
        expect(renderedComponent).toEqual(<li className=''>
            <div>
                <span>10:10</span>
            </div>
            <div>
                <span>London</span>
                <span>10 minutes late</span>
                <span>Platform <bold>3</bold></span>
            </div>
        </li>);
    });

});