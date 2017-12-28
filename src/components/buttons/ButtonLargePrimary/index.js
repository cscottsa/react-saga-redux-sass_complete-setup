import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IconLoading from '../../icons/icon-loader';

export default class ButtonLargePrimary extends Component {
  render() {
    const { children, type = '', className, onClick, isLoading, isDisabled } = this.props;

    // Add all props here
    let buttonProps = {
      // onClick, mandatory IF no type added
      // className, conditional
      // type: 'submit', conditional
      // isDisabled, conditional
      className: 'btn btn--primary btn--lg ButtonLargePrimary' + (className ? ` ${className}` : '') + (isDisabled ? ' btn--disabled' : '')
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
      <button {...buttonProps}>
        { !isLoading &&
          children
        }
        { isLoading &&
          <div className="loading-icon">
            <IconLoading />
          </div>
        }
      </button>
    );
  }
}

ButtonLargePrimary.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string
};
