// import { call, put, takeLatest } from 'redux-saga/effects';

// import {
//   loginCall,
// } from './api';

// import {
//   LOGIN_USER
// } from '../constants';


/*
  Saga watchers
*/

// export function* watchLoginUser() {
//   yield takeLatest(LOGIN_USER.REQUEST, loginUser);
// }

/*
  end Saga watchers
*/


/*
  Saga Workers
  will be fired on [CONSTANT].REQUEST actions by watchers
*/

// function* loginUser({ email, password }) {
//   try {
//     const user = yield call(loginCall, email, password);
//     yield put({ type: LOGIN_USER.SUCCESS, user });
//   } catch (e) {
//     yield put({ type: LOGIN_USER.FAILURE, message: e.message });
//   }
// }

/*
  end Saga workers
*/


export default { watchLoginUser, watchSignupUser };
