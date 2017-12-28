import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ModalHead from '../components/ModalHead';
import ForgotPassword from './components/ForgotPassword';

import { forgotPasswordRequest, resetToDefaultForgotPassword } from '../../../modules/auth/actions';
import { showModalForgotPassword, showModalLogin, showModalSignup } from '../../../modules/modals/actions';
import ButtonLargePrimary from '../../buttons/ButtonLargePrimary/index';

class ModalForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      addActiveTriggered: false
    };

    this.setActive = this.setActive.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onSignup = this.onSignup.bind(this);
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

  onLogin() {
    this.props.showModalForgotPassword(false);
    this.props.showModalLogin(true);
  }

  onSignup() {
    this.props.showModalForgotPassword(false);
    this.props.showModalSignup(true);
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
      this.props.resetToDefaultForgotPassword();
      this.props.showModalForgotPassword(false);
      // Reset values
      this.setState({
        ...this.state,
        isActive: false,
        addActiveTriggered: false
      });
    }, 500);
  }

  render() {
    const { forgotPasswordEmailIfSent, message } = this.props;

    if (this.props.showModal) {
      return (
        <div>
          <div className={'modal-bg' + (this.state.isActive ? ' is-active' : '')} />
          <div className={'modal modal--sm-center modal--fill-mobile' + (this.state.isActive ? ' is-active' : '')}>
            <div className="modal__center">

              <div className="modal-std modal-std--fill-mobile modal-std--auth">

                <ModalHead showOnlyClose={false} onClose={this.closeModal} />

                <div className="modal-std__content">
                  <h3>Forgot Password</h3>

                  {
                    message &&
                      <div className="auth-error">{ message }</div>
                  }

                  {
                    !forgotPasswordEmailIfSent &&
                    <p>Enter the email address associated with your account, and we’ll email you a link to reset your password.</p>
                  }

                  {
                    !forgotPasswordEmailIfSent &&
                    <ForgotPassword submitForgotPassword={this.props.forgotPasswordRequest} />
                  }

                  {
                    !message && forgotPasswordEmailIfSent &&
                    <p>An email has been sent to <strong>{ forgotPasswordEmailIfSent }</strong> with further instructions.</p>
                  }

                  { !message && forgotPasswordEmailIfSent &&
                    <ButtonLargePrimary onClick={this.closeModal}>DONE</ButtonLargePrimary>
                  }

                  <div className="auth-footer">
                    <a onClick={this.onLogin}>Login</a>
                    <span>&#124;</span>
                    <a onClick={this.onSignup}>Signup</a>
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
    showModal: state.modals.showModalForgotPassword,
    forgotPasswordEmailIfSent: state.auth.forgotPasswordEmailIfSent,
    message: state.auth.message
  };
}

export default connect(mapStateToProps, { showModalForgotPassword, showModalLogin, showModalSignup, forgotPasswordRequest, resetToDefaultForgotPassword })(ModalForgotPassword);

ModalForgotPassword.propTypes = {
  showModal: PropTypes.bool,
  forgotPasswordEmailIfSent: PropTypes.string,
  message: PropTypes.string,
  showModalForgotPassword: PropTypes.func,
  showModalLogin: PropTypes.func,
  showModalSignup: PropTypes.func,
  forgotPasswordRequest: PropTypes.func,
  resetToDefaultForgotPassword: PropTypes.func,
};
