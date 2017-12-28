import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import ModalHead from '../components/ModalHead';
import Login from './components/Login';

import { showModalForgotPassword, showModalLogin, showModalSignup } from '../../../modules/modals/actions';

import { loginRequest } from '../../../modules/auth/actions';

class ModalLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      addActiveTriggered: false,
      loginAttempted: false,
    };

    this.setActive = this.setActive.bind(this);
    this.onForgotPassword = this.onForgotPassword.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
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

  submitLogin(values) {
    this.props.loginRequest(values);
  }

  onForgotPassword() {
    this.props.showModalLogin(false);
    this.props.showModalForgotPassword(true);
  }

  onSignup() {
    this.props.showModalLogin(false);
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
      this.props.showModalLogin(false);
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
                  <h3>Login</h3>
                  <Login
                    submitLogin={this.submitLogin}
                    clickForgotPassword={this.onForgotPassword}
                    clickSignup={this.onSignup} />
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
    showModal: state.modals.showModalLogin
  };
}

export default connect(mapStateToProps, {
  showModalLogin,
  showModalSignup,
  showModalForgotPassword,
  loginRequest,
})(ModalLogin);

ModalLogin.propTypes = {
  showModal: PropTypes.bool,
  showModalLogin: PropTypes.func,
  showModalForgotPassword: PropTypes.func,
  showModalSignup: PropTypes.func,
  loginRequest: PropTypes.func,
};
