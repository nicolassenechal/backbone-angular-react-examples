import React, { Component } from 'react';

class Header extends Component {

    render () {
        const text = this.props.origin + ' to ' + this.props.destination;
        return (
            <header>
                <span>{this.props.scheduled}</span>
                <span>{text}</span>
            </header>
        );
    }
}

Header.propTypes = {
    destination: React.PropTypes.string.isRequired,
    origin: React.PropTypes.string.isRequired,
    scheduled: React.PropTypes.string.isRequired
};


export default Header;
