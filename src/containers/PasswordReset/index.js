import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { SUCCESS } from '../../helpers/constants';

import PasswordResetForm from './components/PasswordResetForm/PasswordResetForm';

// import { navigateTo } from '../../helpers/routing';

import { passwordResetRequest, resetResetPassword, resetAuthData } from '../../modules/auth/actions';

class PasswordReset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accessToken: ''
    };

    this.submitPasswordReset = this.submitPasswordReset.bind(this);
  }

  componentWillMount() {
    const { pathname } = this.props.currentLocation;

    this.props.resetAuthData();

    // Get accessToken from path
    const lastForwardSlash = pathname.lastIndexOf('/');
    const accessToken = pathname.substring(lastForwardSlash + 1, pathname.length);
    this.setState({ accessToken });
  }

  componentWillUnmount() {
    this.props.resetAuthData();
    this.props.resetResetPassword();
  }

  submitPasswordReset(values) {
    this.props.passwordResetRequest(values, this.state.accessToken);
  }

  render() {
    return (
      <div className="page-content">
        <div className="ChangeResetPassword">
          <div className="container">
            <h3>Reset Password</h3>

            {
              this.props.resetPasswordStatus !== SUCCESS &&
              <PasswordResetForm
                submitPasswordReset={this.submitPasswordReset}
              />
            }

            {
              this.props.resetPasswordStatus === SUCCESS &&
                <div>
                  <div>Your password has been reset</div>
                </div>
            }


          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentLocation: state.pageLoad.currentLocation,
    resetPasswordStatus: state.auth.resetPasswordStatus,
  };
}

export default connect(mapStateToProps, { passwordResetRequest, resetResetPassword, resetAuthData })(PasswordReset);

PasswordReset.propTypes = {
  resetPasswordStatus: PropTypes.string,
  currentLocation: PropTypes.object,
  passwordResetRequest: PropTypes.func,
  resetResetPassword: PropTypes.func,
  resetAuthData: PropTypes.func,
};
