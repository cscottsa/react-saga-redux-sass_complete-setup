import { put, takeEvery } from 'redux-saga/effects';

import {
  // Watchers
  SHOW_MODAL_LOGIN,
  SHOW_MODAL_SIGNUP,
  SHOW_MODAL_FORGOT_PASSWORD,

  // Workers
  RESET_AUTH_DATA,
} from '../constants';

// import { scheduleQueryAgainstQueueCall } from './api';


/*
  Saga watchers
*/

export function* watchShowModalLogin() {
  yield takeEvery(SHOW_MODAL_LOGIN.REQUEST, showModalLogin);
}

export function* watchShowModalSignup() {
  yield takeEvery(SHOW_MODAL_SIGNUP.REQUEST, showModalSignup);
}

export function* watchShowModalForgotPassword() {
  yield takeEvery(SHOW_MODAL_FORGOT_PASSWORD.REQUEST, showModalForgotPassword);
}


/*
  end Saga watchers
*/


/*
  Saga Workers
  will be fired on [CONSTANT].REQUEST actions by watchers
*/

function* showModalLogin({ payload }) {
  yield put({ type: RESET_AUTH_DATA });
  yield put({ type: SHOW_MODAL_LOGIN.SUCCESS, payload });
}

function* showModalSignup({ payload }) {
  yield put({ type: RESET_AUTH_DATA });
  yield put({ type: SHOW_MODAL_SIGNUP.SUCCESS, payload });
}

function* showModalForgotPassword({ payload }) {
  yield put({ type: RESET_AUTH_DATA });
  yield put({ type: SHOW_MODAL_FORGOT_PASSWORD.SUCCESS, payload });
}

/*
  end Saga workers
*/
