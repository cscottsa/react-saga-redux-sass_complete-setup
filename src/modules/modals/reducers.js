import {
  SHOW_MODAL_LOGIN,
  SHOW_MODAL_SIGNUP,
  SHOW_MODAL_FORGOT_PASSWORD,
  SHOW_MODAL_LOADING,
} from '../constants';

const INITIAL_STATE = {
  // App
  showModalLogin: false,
  showModalSignup: false,
  showModalForgotPassword: false,
  showModalInformation: false,
  message: '',

  showModalLoading: false,

  showModalYesNo: false,
};

export default function modalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Show Modals
    case SHOW_MODAL_LOADING:
      return { ...state, showModalLoading: action.payload };
    case SHOW_MODAL_LOGIN.SUCCESS:
      return { ...state, showModalLogin: action.payload };
    case SHOW_MODAL_SIGNUP.SUCCESS:
      return { ...state, showModalSignup: action.payload };
    case SHOW_MODAL_FORGOT_PASSWORD.SUCCESS:
      return { ...state, showModalForgotPassword: action.payload };

    default:
      return { ...state };
  }
}
