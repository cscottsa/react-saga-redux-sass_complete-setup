// import { call, put, takeEvery } from 'redux-saga/effects';
//
// import {
//   SET_RATES,
//   SET_AREA,
// } from '../constants';
//
// import { scheduleQueryAgainstQueueCall } from './api';


/*
  Saga watchers
*/

// export function* watchSelectArea() {
//   yield takeEvery(SET_AREA.REQUEST, selectArea);
// }


/*
  end Saga watchers
*/


/*
  Saga Workers
  will be fired on [CONSTANT].REQUEST actions by watchers
*/

// function* selectArea({ area }) {
//   yield put({ type: SET_AREA.SUCCESS, area });
//   yield put({ type: SET_RATES, rates: area.rates });
// }

/*
  end Saga workers
*/
