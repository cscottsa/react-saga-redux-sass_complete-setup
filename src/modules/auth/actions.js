import {
  LOGIN_USER,
  SIGNUP_FACEBOOK,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  RESET_AUTH_DATA,
  RESET_TO_DEFAULT_FORGOT_PASSWORD,
  PASSWORD_RESET,
} from '../constants';

export function resetAuthData() {
  return {
    type: RESET_AUTH_DATA
  };
}

export function loginRequest(values) {
  return {
    type: LOGIN_USER.REQUEST,

    email: values.email,
    password: values.password
  };
}

export function facebookSignupRequest(values) {
  return {
    type: SIGNUP_FACEBOOK.REQUEST,

    firstName: values.firstName,
    lastName: values.lastName,
    contactNumber: values.contactNumber,
    email: values.email,
    password: values.password,
    avatar: values.avatar,
    facebookUserId: values.facebookUserId,
    voucherCode: values.voucherCode
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER.REQUEST
  };
}

export function forgotPasswordRequest(values) {
  return {
    type: FORGOT_PASSWORD.REQUEST,

    email: values.email
  };
}

export function resetToDefaultForgotPassword() {
  return {
    type: RESET_TO_DEFAULT_FORGOT_PASSWORD
  };
}

export function passwordResetRequest(values, accessToken) {
  return {
    type: PASSWORD_RESET.REQUEST,

    values,
    accessToken
  };
}
