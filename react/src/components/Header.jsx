import React, { Component } from 'react';

class Header extends Component {

    render () {
        const text = this.props.origin + ' to ' + this.props.destination;
        return (
            <header className='header'>
                <span className='header__span--time'><strong>{this.props.scheduled}</strong></span>
                <span className='header__span--trip'>{text}</span>
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
