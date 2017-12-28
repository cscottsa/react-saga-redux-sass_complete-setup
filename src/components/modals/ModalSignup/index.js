import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ModalHead from '../components/ModalHead';
import Signup from './components/Signup';

import { showModalSignup, showModalLogin } from '../../../modules/modals/actions';

import { signupRequest, facebookSignupRequest } from '../../../modules/auth/actions';

class ModalSignup extends Component {
  constructor(props) {
    super(props);

    if (props.voucherCode) {
      this.state = {
        isActive: true,
        addActiveTriggered: false
      };
    } else {
      this.state = {
        isActive: false,
        addActiveTriggered: false
      };
    }

    this.setActive = this.setActive.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    // On Open ( Initial load )
    if (this.props.voucherCode) {
      this.props.showModalSignup(true);
    }
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

  submitSignup(values) {

    if (this.props.form.signup) {
      console.log(this.props.voucherCode);
      // Check if attempting to signup with Facebook
      if (this.props.form.signup.values.facebookUserId) {
        console.log('calling facebookSignupRequest');
        values = {
          firstName: this.props.form.signup.values.firstName,
          lastName: this.props.form.signup.values.lastName,
          email: this.props.form.signup.values.email,
          contactNumber: this.props.form.signup.values.contactNumber,
          avatar: this.props.form.signup.values.avatar,
          facebookUserId: this.props.form.signup.values.facebookUserId
        };
        if (this.props.voucherCode) {
          values.voucherCode = this.props.voucherCode;
        }
        this.props.facebookSignupRequest(values);

      // Default signup
      } else {
        if (this.props.voucherCode) {
          values.voucherCode = this.props.voucherCode;
        }
        this.props.signupRequest(values);
      }
    }
  }

  onLogin() {
    this.props.showModalSignup(false);
    this.props.showModalLogin(true);
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
      this.props.showModalSignup(false);
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
                  <h3>Create a Domestly Account</h3>

                  {
                    this.props.voucherCode &&
                    <div className="modal-std--auth__voucher-notification">
                      <div className="modal-std--auth__voucher-notification__detected">Voucher code detected</div>
                      <div className="modal-std--auth__voucher-notification__blurb">Complete signup to retrieve voucher</div>
                    </div>
                  }

                  <Signup
                    submitSignup={this.submitSignup}
                    clickLogin={this.onLogin} />
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
    showModal: state.modals.showModalSignup,
    form: state.form,
  };
}

export default connect(mapStateToProps, { showModalSignup, showModalLogin, signupRequest, facebookSignupRequest })(ModalSignup);

ModalSignup.propTypes = {
  showModal: PropTypes.bool,
  form: PropTypes.object,
  showModalSignup: PropTypes.func,
  showModalLogin: PropTypes.func,
  signupRequest: PropTypes.func,
  facebookSignupRequest: PropTypes.func,
  voucherCode: PropTypes.string,
};
