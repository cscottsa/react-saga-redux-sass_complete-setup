import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ButtonThinPrimary extends Component {
  render() {
    const { children, onClick, isDisabled = null } = this.props;

    return (
      <button onClick={onClick} className={'btn btn--primary btn--thin ButtonThinPrimary ' + (isDisabled && (isDisabled() ? ' btn--disabled' : ''))}>{children}</button>
    );
  }
}

ButtonThinPrimary.propTypes = {
  children: PropTypes.node,
  isDisabled: PropTypes.any,
  onClick: PropTypes.func
};
