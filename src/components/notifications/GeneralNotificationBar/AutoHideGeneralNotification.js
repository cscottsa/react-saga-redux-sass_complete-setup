import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { doAutoHideGeneralNotification, updateNotificationActive } from '../../../modules/notifications/actions';

// THE GENERAL NOTIFICATION IS REQUIRED WHEN USING THIS COMPONENT
// THE GENERAL NOTIFICATION IS REQUIRED WHEN USING THIS COMPONENT
// THE GENERAL NOTIFICATION IS REQUIRED WHEN USING THIS COMPONENT

class AutoHideGeneralNotification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNotification: false,
    };

    this.showNotification = this.showNotification.bind(this);
    this.startTimeout = this.startTimeout.bind(this);
    this.checkCancelTimeout = this.checkCancelTimeout.bind(this);
  }

  componentWillMount() {
    browserHistory.listen(() => {
      if (this.state.showNotification) {
        this.showNotification(false);
        this.checkCancelTimeout();
        this.props.updateNotificationActive(false);
      }
    });
  }

  startTimeout() {
    const _this = this;
    this.setState({
      timeout: setTimeout(function () {
        _this.setState({ showNotification: false });
        _this.props.updateNotificationActive(false);
      }, 6000)
    });
  }

  checkCancelTimeout() {
    if (this.state.timeout) {
      clearTimeout(this.state.timeout);
    }
  }

  showNotification(boolean) {
    this.setState({ showNotification: boolean });
  }

  componentWillUpdate(nextProps) {
    const _this = this;

    // Will only be triggered on click, to trigger in-component state methods
    if (nextProps.autoHide === true) {

      if (this.state.showNotification) {
        // If notification already shows, then hide and wait 200ms before showing again
        this.showNotification(false);
        _this.checkCancelTimeout();
        setTimeout(function () {
          _this.showNotification(true);
          _this.startTimeout();
        }, 200);
      } else {
        // If no notification showing yet
        this.showNotification(true);
        this.startTimeout();
      }

      this.props.doAutoHideGeneralNotification(false);
      return false;
    }
  }

  render() {
    if (this.state.showNotification) {
      return <div className="autoHideNotificationBar">{this.props.children}</div>;
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return {
    autoHide: state.notifications.generalNotification.autoHide,
  };
}

export default connect(mapStateToProps, {
  doAutoHideGeneralNotification,
  updateNotificationActive
})(AutoHideGeneralNotification);


AutoHideGeneralNotification.propTypes = {
  children: PropTypes.node,
  autoHide: PropTypes.bool, // eslint-disable-line
  doAutoHideGeneralNotification: PropTypes.func,
  updateNotificationActive: PropTypes.func,
};
