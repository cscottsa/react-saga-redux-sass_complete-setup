import React, { Component } from 'react';
import { reduxForm, Field, isValid, initialize } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ButtonLargePrimary from '../../../buttons/ButtonLargePrimary/index';
import ButtonFacebook from '../../../buttons/ButtonFacebook/index';

import Input from '../../../../components/forms/Input';
import validate from './validate';

import { getFBUserDetails } from '../../../../modules/auth/api';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: false,
      showPasswordField: true
    };

    this.signupFacebook = this.signupFacebook.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const that = this;
    if (nextProps.errors) { // eslint-disable-line
      console.log(nextProps);
      that.setState({ errors: true });
    }
  }

  signupFacebook(e) {
    e.preventDefault();
    FB.login((response) => { // eslint-disable-line
      console.log('FB.login response');
      console.log(response);

      if (response.status === 'connected') {
        getFBUserDetails(
          (facebookDataResponse) => {
            const facebookDataToForm = {
              firstName: facebookDataResponse.first_name,
              lastName: facebookDataResponse.last_name,
              email: facebookDataResponse.email,
              avatar: [{ externalUrl: 'https://graph.facebook.com/' + facebookDataResponse.id + '/picture?type=large' }],
              facebookUserId: facebookDataResponse.id
            };

            this.props.populateSignupForm(facebookDataToForm);
            this.setState({ showPasswordField: false });
          }

        );
      }
    });
  }


  render() {
    const {
      handleSubmit,
      valid,
      message
    } = this.props;

    return (
      <div>
        <form className="modal-std__form" action="" onSubmit={handleSubmit(this.props.submitSignup)}>
          <div className={'form-error' + (message && ' is-active')}>
            <span>{message}</span>
          </div>
          <Field name="firstName" type="text" component={Input} alwaysHideLabel={true} placeholder="First Name" className="form-control" />
          <Field name="lastName" type="text" component={Input} alwaysHideLabel={true} placeholder="Last Name" className="form-control" />
          <Field name="contactNumber" type="number" component={Input} alwaysHideLabel={true} placeholder="Contact Number" className="form-control" />
          <Field name="email" type="email" component={Input} alwaysHideLabel={true} placeholder="Email Address" className="form-control form-control--email" />
          {
            this.state.showPasswordField &&
              <div>
                <Field name="password" type="password" component={Input} alwaysHideLabel={true} placeholder="Password" className="form-control form-control--password" />
                <p className="password-requirements">Choose a password that is at least 7 characters long.</p>
              </div>
          }

          <ButtonLargePrimary
            type="submit"
            isDisabled={!valid}
          >Signup</ButtonLargePrimary>

          {
            this.state.showPasswordField &&
            <div className="or-divider">
              <div />
              <span>or</span>
            </div>
          }

        </form>

        {
          this.state.showPasswordField &&
          <form action="" onSubmit={this.signupFacebook}>
            <ButtonFacebook
              isDisabled={false}
            >Signup up with Facebook</ButtonFacebook>
          </form>
        }

        <p className="disclaimer">By clicking Signup, I confirm that I have read and understand Domestly’s <a>Terms and Service</a> & <a>Privacy Policy</a></p>

        <div className="auth-footer">Already have an account? <a onClick={this.props.clickLogin}>Login</a></div>


      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    valid: isValid('signup')(state),
    message: state.auth.message
  };
}

function mapDispatchToProps(dispatch) {
  return {
    populateSignupForm: (data) => {
      dispatch(initialize('signup', data, false));
    }
  };
}

Signup.propTypes = {
  handleSubmit: PropTypes.func,
  valid: PropTypes.bool,
  clickLogin: PropTypes.func,
  populateSignupForm: PropTypes.func,
  submitSignup: PropTypes.func,
  message: PropTypes.string
};

const connected = connect(mapStateToProps, mapDispatchToProps)(Signup);

export default reduxForm({
  validate,
  form: 'signup',
})(connected);
