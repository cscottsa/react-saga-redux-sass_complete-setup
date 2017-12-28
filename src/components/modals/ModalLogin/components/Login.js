import React, { Component } from 'react';
import { reduxForm, Field, isValid } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ButtonLargePrimary from '../../../buttons/ButtonLargePrimary/index';
import ButtonFacebook from '../../../buttons/ButtonFacebook/index';

import Input from '../../../../components/forms/Input';
import validate from './validate';

import { loginFacebook } from '../../../../modules/auth/actions';
// import { getFBUserDetails } from '../../../../modules/auth/api';

class Login extends Component {
  constructor(props) {
    super(props);

    this.fbLogin = this.fbLogin.bind(this);
  }

  fbLogin(e) {
    e.preventDefault();
    console.log('fbLogin clicked');
    /* eslint-disable */
    // FB.login();

    FB.login((response) => {
      console.log('FB.login response');
      console.log(response);

      // this.getFBUserDetails();

      this.props.loginFacebook(response.authResponse.accessToken);

      // Handle the response object, like in statusChangeCallback() in our demo
      // code.
    });
    /* eslint-enable */
  }

  // TODO: remove if needed after time
  // fbLogout(e) {
  //   e.preventDefault();
  //   console.log('fbLogout clicked');
  //   /* eslint-disable */
  //   // FB.logout();
  //
  //   FB.logout((response) => {
  //     console.log('FB.logout response');
  //     console.log(response);
  //     // Handle the response object, like in statusChangeCallback() in our demo
  //     // code.
  //   });
  //   /* eslint-enable */
  // }

  render() {
    const {
      handleSubmit,
      valid,
      message
    } = this.props;

    return (
      <div>
        <form className="modal-std__form" action="" onSubmit={handleSubmit(this.props.submitLogin)}>
          <div className={'form-error' + (message && ' is-active')}>
            <span>{message}</span>
          </div>
          <Field name="email" type="email" component={Input} alwaysHideLabel={true} placeholder="Email Address"
                 className="form-control form-control--email" />
          <Field name="password" type="password" component={Input} alwaysHideLabel={true} placeholder="Password"
                 className="form-control form-control--password" />
          <div className="forgot-password-right">
            <span onClick={this.props.clickForgotPassword}>Forgot your password?</span>
          </div>

          <ButtonLargePrimary
            type="submit"
            isDisabled={!valid}
          >Login</ButtonLargePrimary>

          <div className="or-divider">
            <div />
            <span>or</span>
          </div>
        </form>
        <form onSubmit={this.fbLogin}>
          <ButtonFacebook
            isDisabled={false}
          >Login with Facebook</ButtonFacebook>
        </form>

        <div className="auth-footer">Dont have an account? <a onClick={this.props.clickSignup}>Sign Up Now</a></div>

      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    valid: isValid('login')(state),
    message: state.auth.message
  };
}

// Did this to send action through prop to ScheduleWidget, to have ScheduleWidget reusable
function mapDispatchToProps(dispatch) {
  return {
    loginFacebook: (accessToken) => {
      dispatch(loginFacebook(accessToken));
    },
  };
}

Login.propTypes = {
  loginFacebook: PropTypes.func,
  handleSubmit: PropTypes.func,
  valid: PropTypes.bool,
  message: PropTypes.string,
  clickForgotPassword: PropTypes.func,
  clickSignup: PropTypes.func,
  submitLogin: PropTypes.func,
};

const connected = connect(mapStateToProps, mapDispatchToProps)(Login);

export default reduxForm({
  validate,
  form: 'login',
})(connected);
