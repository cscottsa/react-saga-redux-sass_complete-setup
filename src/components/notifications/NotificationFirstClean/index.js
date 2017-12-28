import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IconNotificationDefault from '../../icons/icon-notification-default';

export default class NotificationFirstClean extends Component {
  render() {
    return (
      <div className="NotificationFirstClean">
        <div>Your first cleaning is scheduled for: </div>
        <span>{ this.props.date }</span>
        <i className="icon">
          <IconNotificationDefault />
        </i>
      </div>
    );
  }
}

NotificationFirstClean.propTypes = {
  date: PropTypes.string
};
