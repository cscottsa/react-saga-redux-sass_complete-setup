import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ButtonFacebook extends Component {
  render() {
    const { children, onClick, isDisabled } = this.props;

    const props = {};

    // If no onClick, check if submit
    if (onClick) {
      props.onClick = onClick;
    } else {
      props.type = 'submit';
    }
    return (
      <button {...props} className={'btn btn--facebook btn--lg ' + (isDisabled ? ' btn--disabled' : '')}>{children}</button>
    );
  }
}

ButtonFacebook.propTypes = {
  children: PropTypes.node,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};
