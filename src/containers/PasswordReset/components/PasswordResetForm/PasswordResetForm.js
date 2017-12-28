import React, { Component } from 'react';
import { reduxForm, Field, isValid } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ButtonLargePrimary from '../../../../components/buttons/ButtonLargePrimary/index';

import Input from '../../../../components/forms/Input';
import validate from './validate';

import { loginFacebook } from '../../../../modules/auth/actions';

// import { getFBUserDetails } from '../../../../modules/auth/api';

class PasswordResetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enum: {
        'NEW_PASSWORD': 'new_password',
        'VERIFY_PASSWORD': 'verify_password',
      }
    };

    this.passwordFieldIndicator = this.passwordFieldIndicator.bind(this);
  }

  passwordFieldIndicator(enumValue) {

    // First check if values added yet
    if (this.props.passwordResetForm.values) {

      if (this.props.passwordResetForm.values.newPassword) {

        if (enumValue === this.state.enum.NEW_PASSWORD) {

          if (this.props.passwordResetForm.values.newPassword.length > 6) {
            return 'is-correct';
          }
        }
      }


      if (this.props.passwordResetForm.values.verifyPassword) {

        if (enumValue === this.state.enum.VERIFY_PASSWORD) {

          // If verifyPassword length 7 and up
          if (this.props.passwordResetForm.values.verifyPassword.length > 6) {

            // If confirmedPassword and password is equal
            if (this.props.passwordResetForm.values.newPassword === this.props.passwordResetForm.values.verifyPassword) {
              return 'is-correct';
            } else {
              return 'is-incorrect';
            }

            // If verifyPassword length less than 7
          } else {

            // Check if current error displayed as well, dirty way to check if dirty.
            if (this.props.passwordResetForm.syncErrors.verifyPassword) {
              return 'is-incorrect';
            }
          }
        }
      }
    }
  }

  render() {
    const {
      handleSubmit,
      valid,
      message
    } = this.props;

    return (
      <form action="" onSubmit={handleSubmit(this.props.submitPasswordReset)}>
        <div className={'form-error' + (message && ' is-active')}>
          <span>{message}</span>
        </div>

        <div className="PasswordChangeResetForm__tile">

          <div className="form-group">
            <label>New Password</label>
            <div className="PasswordChangeResetForm__tile__input-group">
              <Field name="newPassword" type="password" component={Input} alwaysHideLabel={true}
                     placeholder="Enter password"
                     className="form-control" />
              <span className="valid-block">
                <span className={this.passwordFieldIndicator(this.state.enum.NEW_PASSWORD)} />
              </span>
            </div>
          </div>
          <div className="form-group">
            <label>Confirm New Password</label>
            <div className="PasswordChangeResetForm__tile__input-group">
              <Field name="verifyPassword" type="password" component={Input} alwaysHideLabel={true}
                     placeholder="Enter password"
                     className="form-control"
              />
              <span className="valid-block">
                <span className={this.passwordFieldIndicator(this.state.enum.VERIFY_PASSWORD)} />
              </span>
            </div>
          </div>

        </div>

        <div className="PasswordChangeResetForm__action">
          <ButtonLargePrimary type="submit" isDisabled={!valid}>Submit</ButtonLargePrimary>
        </div>

      </form>
    );
  }

}

function mapStateToProps(state) {
  return {
    valid: isValid('passwordResetForm')(state),
    message: state.auth.message,
    passwordResetForm: state.form.passwordResetForm
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginFacebook: (accessToken) => {
      dispatch(loginFacebook(accessToken));
    },
  };
}

PasswordResetForm.propTypes = {
  handleSubmit: PropTypes.func,
  valid: PropTypes.bool,
  message: PropTypes.string,
  passwordResetForm: PropTypes.object,
  submitPasswordReset: PropTypes.func,
};

const connected = connect(mapStateToProps, mapDispatchToProps)(PasswordResetForm);

export default reduxForm({
  validate,
  form: 'passwordResetForm',
})(connected);
