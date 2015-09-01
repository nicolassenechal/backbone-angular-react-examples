import React, { Component } from 'react';
import Stop from './Stop.jsx';

class StopList extends Component {

    generateStops () {
        let stops = [];
        this.props.callingPoints.map( (callingPoint, index, array) => {
            const isFirst = (index === 0);
            const isLast = (index === array.length - 1);
            stops.push(<Stop callingPoint={callingPoint} first={isFirst} key={index} last={isLast} />);
        });
        return stops;
    }

    render () {
        const stops = this.generateStops();
        return (
            <section className='stop-list'>
                <ul className='stop-list__ul'>
                    {stops}
                </ul>
            </section>
        );
    }
}

StopList.propTypes = {
    callingPoints: React.PropTypes.array.isRequired
};

export default StopList;
