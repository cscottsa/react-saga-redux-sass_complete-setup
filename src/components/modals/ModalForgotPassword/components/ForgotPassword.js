import React, { Component } from 'react';
import { reduxForm, Field, isValid } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ButtonLargePrimary from '../../../buttons/ButtonLargePrimary/index';

import Input from '../../../../components/forms/Input';
import validate from './validate';

class ForgotPassword extends Component {
  render() {
    const {
      handleSubmit,
      valid,
    } = this.props;

    return (
      <form className="modal-std__form" onSubmit={handleSubmit(this.props.submitForgotPassword)}>
        <Field name="email" type="email" component={Input} placeholder="Email Address" className="form-control form-control--email" />

        <ButtonLargePrimary
          isDisabled={!valid}
        >Reset Password</ButtonLargePrimary>
      </form>
    );
  }

}

function mapStateToProps(state) {
  return {
    valid: isValid('forgotPassword')(state)
  };
}

ForgotPassword.propTypes = {
  handleSubmit: PropTypes.func,
  valid: PropTypes.bool,
  submitForgotPassword: PropTypes.func,
};

const connected = connect(mapStateToProps, {})(ForgotPassword);

export default reduxForm({
  validate,
  form: 'forgotPassword',
})(connected);
