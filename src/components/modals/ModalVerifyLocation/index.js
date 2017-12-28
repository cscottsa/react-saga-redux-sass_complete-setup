import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ModalHead from '../components/ModalHead';
import ButtonLargePrimary from '../../buttons/ButtonLargePrimary/index';

import { showModalVerifyLocation } from '../../../modules/modals/actions';

import SearchGoogleMap from './components/SearchGoogleMap/index';

class ModalVerifyLocation extends Component {
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
      this.props.showModalVerifyLocation(false);
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

              <div className="modal-std modal-std--fill-mobile modal-std--verify-location">

                <ModalHead showOnlyClose={false} onClose={this.closeModal} />

                <div className="modal-std__content modal-std--verify-location__content">
                  <div className="modal-std--verify-location__top-container">
                    <h4>Please confirm your location</h4>
                    <div>Address:</div>
                    <div className="address">{this.props.details.address.line2 + ', ' + this.props.details.address.suburb + ', ' + this.props.details.address.city + ', ' + this.props.details.address.areaCode}</div>
                  </div>

                  {/* TODO: https://stackoverflow.com/questions/28889826/react-set-focus-on-input-after-render*/}

                  <SearchGoogleMap
                    boundCenterMarkers={this.props.boundCenterMarkers}
                    updateCenterMarkers={this.props.updateCenterMarkers}
                    updateBoundsCenter={this.props.updateBoundsCenter}
                    updateGpsLocation={this.props.updateGpsLocation}
                  />

                  <div>{this.props.disableConfirmLocationButton()}</div>

                  <ButtonLargePrimary onClick={this.props.clickConfirmLocation} isDisabled={this.props.disableConfirmLocationButton()}>Confirm Location</ButtonLargePrimary>
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
    showModal: state.modals.showModalVerifyLocation,
    details: state.bookingProcess.details
  };
}

export default connect(mapStateToProps, { showModalVerifyLocation })(ModalVerifyLocation);

ModalVerifyLocation.propTypes = {
  showModal: PropTypes.bool,
  showModalVerifyLocation: PropTypes.func,
  details: PropTypes.object,
  boundCenterMarkers: PropTypes.object,
  updateCenterMarkers: PropTypes.func,
  updateBoundsCenter: PropTypes.func,
  updateGpsLocation: PropTypes.func,
  disableConfirmLocationButton: PropTypes.func,
  clickConfirmLocation: PropTypes.func
};
