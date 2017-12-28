import {
  LOGIN_USER,
  LOGOUT_USER,
  RESET_AUTH_DATA,
} from '../constants';

import {
  INITIAL,
  // SUCCESS,
  // FAILURE
} from '../../helpers/constants';

const INITIAL_STATE = {
  userLoggedIn: false,

  message: '',  //  Login and Signup listens for error on value
  forgotMessage: '',  //  Forgot Password listens for error on value

  loginRequesting: false,
  loginSuccessful: false,
  signupRequesting: false,
  signupSuccessful: false,

  forgotPasswordEmailIfSent: '',

  resetPasswordStatus: INITIAL
};

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    // Add any data that needs to be set to default on auth component load.
    case RESET_AUTH_DATA:
      return {
        ...state,
        message: '',
        forgotPasswordEmailIfSent: '',
      };

    // Login
    case LOGIN_USER.REQUEST:
      return {
        ...state,
        loginRequesting: false,
        loginSuccessful: false,
      };
    case LOGIN_USER.SUCCESS:
      return {
        ...state,
        loginRequesting: false,
        loginSuccessful: true,

        message: ''
      };
    case LOGIN_USER.FAILURE:
      return {
        ...state,
        loginRequesting: false,
        loginSuccessful: false,

        message: action.message
      };



    // Logout
    case LOGOUT_USER.SUCCESS:
      return {
        ...state,
        message: ''
      };


    default:
      return { ...state };
  }
}
