import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import IconNotificationDefault from '../../icons/icon-notification-default';

class ErrorNotificationBar extends Component {
  render() {

    let text = '';

    if (this.props.text) {
      text = this.props.text;
    } else {
      text = this.props.errorNotificationText;
    }

    return (
      <div className="notificationBar notificationBar--error">
        <div>{text}</div>
        { this.props.tooltip &&
        <div className={'icn tooltip--bottom'} data-tooltip={this.props.tooltip}>
          <IconNotificationDefault />
        </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorNotificationText: state.notifications.errorNotification.text
  };
}

export default connect(mapStateToProps, {})(ErrorNotificationBar);

ErrorNotificationBar.propTypes = {
  text: PropTypes.string,
  tooltip: PropTypes.string,
  errorNotificationText: PropTypes.string
};
