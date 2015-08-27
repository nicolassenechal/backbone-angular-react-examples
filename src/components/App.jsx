import React, { Component } from 'react';
import Header from './Header.jsx';
import StopList from './StopList.jsx';
import TripService from '../services/Trip.js';

class AppComponent extends Component {
    constructor () {
        super();
        this.state = {};
        TripService.getTrip().then((state) => {
            if (state) {
                this.setState(state);
            }
        });
    }

    render () {
        if (this.state.journey) {
            return (
                <div>
                    <Header scheduled={this.state.journey.scheduled}
                            origin={this.state.journey.origin}
                            destination={this.state.journey.destination}/>
                    <StopList callingPoints={this.state.callingPoints}/>
                </div>
            );
        } else {
            return <div>Please wait</div>;
        }

    }
}

export default AppComponent;
