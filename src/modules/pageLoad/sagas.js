import { call, put, takeEvery } from 'redux-saga/effects';

import {
  // Watchers
  APP_LOAD_GET_ME,

  // Workers
  SET_USER,
  LOGIN_USER,
  APP_LOAD
} from '../constants';

import { getMe } from '../auth/api';

/*
  Saga watchers
*/

export function* watchAppLoadGetMe() {
  yield takeEvery(APP_LOAD_GET_ME.REQUEST, appLoadGetMe);
}

export function* dummyMethod() {
  yield takeEvery('dummy_method', () => console.log('dummyMethod'));
}


/*
  end Saga watchers
*/


/*
  Saga Workers
  will be fired on [CONSTANT].REQUEST actions by watchers
*/

function* appLoadGetMe() {
  try {
    const user = yield call(getMe); // TODO api
    // const user = {"_id":"599ed6d5d562e17402a4e8ac","state":"2","wallet":{"balance":35,"credits":[{"created":"2017-08-24T13:38:29.459Z","_id":"599ed6d5d562e17402a4e8ad","paymentProvider":"4","reasonType":"5","amount":35,"description":"Signup credit","initiatedBySystem":true}]},"provider":"local","firstName":"Christian","lastName":"Scott","contactNumber":"0765213843","email":"christian+test@domestly.com","role":"2","type":"5","__v":0,"updated":"2017-09-03T23:47:38.559Z","avatar":[{"name":"defaultavatar.png","path":"uploads/static/defaultavatar.png","originalName":"defaultavatar.png","mimeType":"image/png","_id":"599ed6d5d562e17402a4e8ae","created":"2017-08-21T13:01:13.565Z","fullUrl":"http://localhost:3000/uploads/static/defaultavatar.png","id":"599ed6d5d562e17402a4e8ae"}],"files":[],"created":"2017-08-24T13:38:29.470Z","numberOfSkippedBookingsPerMonth":0,"bookingsCompleted":2,"numberOfReviews":2,"reviewRating":0.8,"weeklyOccupiedSchedule":[],"skills":[],"areasOfService":[],"languages":[],"references":[],"identificationNumbers":[],"gender":"3","addresses":[],"preferredContactMethod":"1","displayName":"Christian Scott"};
    yield put({ type: SET_USER, user });
    yield put({ type: LOGIN_USER.SUCCESS });
    yield put({ type: APP_LOAD_GET_ME.SUCCESS });
    yield put({ type: APP_LOAD.SUCCESS });
  } catch (e) {
    // yield put({ type: APP_LOAD_GET_ME.FAILURE });
    // yield put({ type: APP_LOAD.SUCCESS });
    yield put({ type: LOGIN_USER.SUCCESS });
    yield put({ type: APP_LOAD_GET_ME.SUCCESS });
    yield put({ type: APP_LOAD.SUCCESS });
  } // eslint-disable-line
}

/*
  end Saga workers
*/
