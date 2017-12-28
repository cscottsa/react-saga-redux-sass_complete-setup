import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ModalHead from '../components/ModalHead';

class ModalPreviousCleanerSchedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      addActiveTriggered: false
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
            addActiveTriggered: true
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
      this.props.showModalPreviousCleanerSchedule(false);
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
          <div className={'modal-bg' + (this.state.isActive ? ' is-active' : '')} />
          <div className={'modal modal--sm-center modal--fill-mobile' + (this.state.isActive ? ' is-active' : '')}>
            <div className="modal__center">

              <div className="modal-std modal-std--fill-mobile modal-std--auth">

                <ModalHead showOnlyClose={false} onClose={this.closeModal} />

                <div className="modal-std__content">
                  <h3>Choose your Home Hero</h3>
                  <p>Content here</p>
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
    showModal: state.modals.showModalPreviousCleanerSchedule
  };
}

export default connect(mapStateToProps, {})(ModalPreviousCleanerSchedule);

ModalPreviousCleanerSchedule.propTypes = {
  showModal: PropTypes.bool,
  showModalPreviousCleanerSchedule: PropTypes.func,
};
