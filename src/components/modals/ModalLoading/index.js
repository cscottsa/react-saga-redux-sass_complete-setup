import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import IconLoading from '../../icons/icon-loader';

import { showModalLoading } from '../../../modules/modals/actions';

class ModalLoading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      addActiveTriggered: false,
    };

    this.setActive = this.setActive.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    // On Open ( Initial load )
    if (this.props.showModal) {
      if (!this.state.isActive && !this.state.addActiveTriggered) {
        setTimeout(() => {
          this.setState({
            ...this.state,
            isActive: true,
            addActiveTriggered: true,
            loginAttempted: false
          });
        }, 300);
      }
    }
  }

  componentDidUpdate(prevProps) {
    // On Open ( Not initial load )
    if (!prevProps.showModal && this.props.showModal) {
      setTimeout(() => {
        this.setActive();
      }, 200);
    }
  }

  setActive() {
    this.setState({
      ...this.state,
      isActive: true
    });
  }

  closeModal() {
    // Transition, remove isActive class
    this.setState({
      ...this.state,
      isActive: false
    });
    // Delay, for transition to complete
    setTimeout(() => {
      // Hide Modal (Hide html)
      this.props.showModalLoading(false);
      // Reset values
      this.setState({
        ...this.state,
        isActive: false,
        addActiveTriggered: false
      });
    }, 500);
  }

  render() {
    if (this.props.showModal) {
      return (
        <div>
          <div className={'modal-bg modal-bg--loading' + (this.state.isActive ? ' is-active' : '')} />
          <div className={'modal modal--sm-center modal--fill-mobile modal-std--loading ' + (this.state.isActive ? ' is-active' : '')}>
            <div className="modal__center">
              <div className="modal-std--loading">
                <div className="loading-icon">
                  <IconLoading />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return {
    showModal: state.modals.showModalLoading
  };
}

export default connect(mapStateToProps, {
  showModalLoading,
})(ModalLoading);

ModalLoading.propTypes = {
  showModal: PropTypes.bool,
  showModalLoading: PropTypes.func,
};
