// import { call, put, takeLatest } from 'redux-saga/effects';
//
// import {
//   LOGIN_USER,
//   LOGOUT_USER,
//
//   SET_USER,
//   UNSET_USER,
//
//   SHOW_MODAL_LOGIN,
//
//   NAVIGATE
// } from '../constants';
//
//
// /*
//   Saga watchers
// */
//
// export function* watchLoginUser() {
//   yield takeLatest(LOGIN_USER.REQUEST, loginUser);
// }
//
//
// export function* watchLogoutUser() {
//   yield takeLatest(LOGOUT_USER.REQUEST, logoutUser);
// }
//
// /*
//   end Saga watchers
// */
//
//
// /*
//   Saga Workers
//   will be fired on [CONSTANT].REQUEST actions by watchers
// */
//
// function* loginUser({ email, password }) {
//   try {
//     // const user = yield call(loginCall, email, password);
//     yield put({ type: LOGIN_USER.SUCCESS });
//     yield put({ type: SET_USER, user });
//     yield put({ type: SHOW_MODAL_LOGIN.SUCCESS, payload: false });
//   } catch (e) {
//     yield put({ type: LOGIN_USER.FAILURE, message: e.response.data.message });
//   }
// }
//
//
// function* logoutUser() {
//   try {
//     // yield call(logout);
//     yield put({ type: UNSET_USER });
//     yield put({ type: NAVIGATE, pathname: '' });
//     yield put({ type: LOGOUT_USER.SUCCESS });
//   } catch (e) {
//     yield put({ type: LOGOUT_USER.FAILURE });
//   }
// }
//
// /*
//   end Saga workers
// */
//
//
// export default { watchLoginUser, watchSignupUser, logoutUser };
