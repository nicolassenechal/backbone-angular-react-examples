import React, { Component } from 'react';
import moment from 'moment';

class Stop extends Component {

    isLate () {
        //Assumption that trains are either late or on time, never early
        return (this.props.callingPoint.scheduled !== this.props.callingPoint.expected);
    }

    getLateness () {

        if (this.isLate()) {
            var scheduled = moment(this.props.callingPoint.scheduled, 'HH:mm');
            var expected = moment(this.props.callingPoint.expected, 'HH:mm');
            return expected.diff(scheduled, 'minutes') + ' minutes late';
        } else {
            return 'On time';
        }
    }

    getPlatform () {
        return this.props.callingPoint.platform ? this.props.callingPoint.platform.toString() : '-';
    }

    getClassName () {
        var cn = 'stop ';
        cn += (!!this.props.callingPoint.actual) ? 'stop--past ' : '';
        cn += (this.props.first) ? 'stop--first ' : '';
        cn += (this.props.last) ? 'stop--last ' : '';

        return cn;
    }

    render () {
        return (<li className={this.getClassName()}>
            <div className='stop__div stop__div--left'>
                <p className='stop__p'><strong>{this.props.callingPoint.scheduled}</strong></p>
                {this.isLate() ? <p className='stop__p stop__p--expected'>{this.props.callingPoint.expected}</p> : null}
            </div>
            <div className='stop__div stop__div--right'>
                <p className='stop__p'>{this.props.callingPoint.station}</p>
                <p>
                    <span className={this.isLate() ? 'stop__span--late' : ''}>{this.getLateness()}</span>
                    <span className='stop__span--platform'>Platform <strong>{this.getPlatform()}</strong></span>
                </p>
            </div>
        </li>);
    }
}

Stop.propTypes = {
    callingPoint: React.PropTypes.object.isRequired,
    first: React.PropTypes.bool.isRequired,
    last: React.PropTypes.bool.isRequired
};

export default Stop;