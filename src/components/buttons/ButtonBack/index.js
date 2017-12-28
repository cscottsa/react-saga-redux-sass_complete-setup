import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ButtonBack extends Component {
  render() {
    const { children } = this.props;

    return (
      <button className="ButtonBack">{ children }</button>
    );
  }
}

ButtonBack.propTypes = {
  children: PropTypes.node
};
