import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import IconNotificationDefault from '../../icons/icon-notification-default';

class GeneralNotificationBar extends Component {
  render() {

    let text = '';

    if (this.props.text) {
      text = this.props.text;
    } else {
      text = this.props.generalNotificationText;
    }

    return (
      <div className="notificationBar notificationBar--grey">
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
    generalNotificationText: state.notifications.generalNotification.text
  };
}

export default connect(mapStateToProps, {})(GeneralNotificationBar);

GeneralNotificationBar.propTypes = {
  text: PropTypes.string,
  tooltip: PropTypes.string,
  generalNotificationText: PropTypes.string
};
