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
        expect(renderedComponent).toEqual(<li className='stop '>
            <div className='stop__div stop__div--left'>
                <p className='stop__p'><strong>10:10</strong></p>
                {null}
            </div>
            <div className='stop__div stop__div--right'>
                <p className='stop__p'>London</p>
                <p>
                    <span className=''>On time</span>
                    <span className='stop__span--platform'>Platform <strong>3</strong></span>
                </p>

            </div>
        </li>);
    });

    it('uses - if the platform is not specified', () => {
        this.shallowRenderer.render(getComponent());
        var renderedComponent = this.shallowRenderer.getRenderOutput();
        expect(renderedComponent).toEqual(<li className='stop '>
            <div className='stop__div stop__div--left'>
                <p className='stop__p'><strong>10:10</strong></p>
                {null}
            </div>
            <div className='stop__div stop__div--right'>
                <p className='stop__p'>London</p>
                <p>
                    <span className=''>On time</span>
                    <span className='stop__span--platform'>Platform <strong>-</strong></span>
                </p>

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
        expect(renderedComponent).toEqual(<li className='stop '>
            <div className='stop__div stop__div--left'>
                <p className='stop__p'><strong>10:10</strong></p>
                <p className='stop__p stop__p--expected'>10:20</p>
            </div>
            <div className='stop__div stop__div--right'>
                <p className='stop__p'>London</p>
                <p>
                    <span className='stop__span--late'>10 minutes late</span>
                    <span className='stop__span--platform'>Platform <strong>3</strong></span>
                </p>

            </div>
        </li>);
    });

});