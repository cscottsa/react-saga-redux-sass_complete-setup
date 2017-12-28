import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ModalHead from '../components/ModalHead';

import { showModalYesNo } from '../../../modules/modals/actions';

import ButtonThinOutline from '../../buttons/ButtonThinOutline/index';
import ButtonThinPrimary from '../../buttons/ButtonThinPrimary/index';

class ModalYesNo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      addActiveTriggered: false
    };

    this.setActive = this.setActive.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.yes = this.yes.bind(this);
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

  yes() {
    this.props.yes();
    this.props.showModalYesNo(false);
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
      if (this.props.no) {
        this.props.no();
      }
      this.props.showModalYesNo(false);
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

              <div className="modal-std modal-std--fill-mobile modal-std--confirm-skip-booking">

                <ModalHead showOnlyClose={false} onClose={this.closeModal} />

                <div className="modal-std__content">
                  <h5>{this.props.title}</h5>
                  <p>{this.props.text}</p>
                  <div className="action-buttons">
                    <ButtonThinOutline onClick={this.closeModal}>No</ButtonThinOutline>
                    <ButtonThinPrimary onClick={this.yes}>Yes</ButtonThinPrimary>
                  </div>
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
    showModal: state.modals.showModalYesNo,
  };
}

export default connect(mapStateToProps, { showModalYesNo })(ModalYesNo);

ModalYesNo.propTypes = {
  showModal: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
  no: PropTypes.func,
  yes: PropTypes.func,
  showModalYesNo: PropTypes.func,
};
