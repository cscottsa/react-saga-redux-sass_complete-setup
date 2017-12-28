import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ButtonThinOutline extends Component {
  render() {
    const { children, type = '', className, onClick, isDisabled } = this.props;

    // Add all props here
    let buttonProps = {
      // onClick, mandatory IF no type added
      // className, conditional
      // type: 'submit', conditional
      // isDisabled, conditional
      className: 'btn btn--secondary btn--lg ButtonThinOutline ' + (className ? ` ${className}` : '') + (isDisabled ? ' btn--disabled' : '')
    };

    // If no type = ''
    if (type === 'submit') {
      buttonProps = {
        ...buttonProps,
        type
      };

      // use onClick
    } else {
      buttonProps = {
        ...buttonProps,
        onClick
      };
    }

    return (
      <button {...buttonProps}>{children}</button>
    );
  }
}

ButtonThinOutline.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string
};
