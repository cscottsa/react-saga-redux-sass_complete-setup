import {
  SHOW_MODAL_FORGOT_PASSWORD,
  SHOW_MODAL_INFORMATION,
  SHOW_MODAL_LOADING,
  SHOW_MODAL_LOGIN,
  SHOW_MODAL_SIGNUP,
  SHOW_MODAL_YES_NO,
} from '../constants';

// Show modal actions
export function showModalLoading(boolean) {
  return {
    type: SHOW_MODAL_LOADING,
    payload: boolean
  };
}

export function showModalLogin(boolean) {
  return {
    type: SHOW_MODAL_LOGIN.REQUEST,
    payload: boolean
  };
}

export function showModalSignup(boolean) {
  return {
    type: SHOW_MODAL_SIGNUP.REQUEST,
    payload: boolean
  };
}

export function showModalForgotPassword(boolean) {
  return {
    type: SHOW_MODAL_FORGOT_PASSWORD.REQUEST,
    payload: boolean
  };
}

export function showModalYesNo(boolean) {
  return {
    type: SHOW_MODAL_YES_NO,
    payload: boolean
  };
}

export function showModalInfo(boolean, message) {
  return {
    type: SHOW_MODAL_INFORMATION,
    payload: boolean,
    message
  };
}
