import React, { Component } from 'react';
import moment from 'moment';

class Stop extends Component {

    getLateness () {
        //Assumption that trains are either late or on time, never early
        var isLate = (this.props.callingPoint.scheduled !== this.props.callingPoint.expected);
        if (isLate) {
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
        var cn = '';
        cn += (!!this.props.callingPoint.actual) ? 'past ' : '';
        cn += (this.props.first) ? 'first ' : '';
        cn += (this.props.last) ? 'last ' : '';

        return cn;
    }

    render () {
        return <li className={this.getClassName()}>
            <div>
                <span>{this.props.callingPoint.scheduled}</span>
            </div>
            <div>
                <span>{this.props.callingPoint.station}</span>
                <span>{this.getLateness()}</span>
                <span>Platform <bold>{this.getPlatform()}</bold></span>
            </div>
        </li>;
    }
}

Stop.propTypes = {
    callingPoint: React.PropTypes.object.isRequired,
    first: React.PropTypes.bool.isRequired,
    last: React.PropTypes.bool.isRequired
};

export default Stop;