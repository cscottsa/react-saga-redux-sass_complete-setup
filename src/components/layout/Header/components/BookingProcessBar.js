import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BookingProcessBar extends Component {
  render() {
    const _states = Object.keys(this.props.states);
    return (
      <ul className="BookingProcessBar">
        {
          _states.map((stateProperty, index) => {
            return (
              <li key={index} className={this.props.states[stateProperty].active ? ' is-active' : ''}>
                <span className="check" />
                <span className="label">{this.props.states[stateProperty].label}</span>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

BookingProcessBar.propTypes = {
  states: PropTypes.array
};
