import { put, takeEvery } from 'redux-saga/effects';

import {
  // AUTO_HIDE_GENERAL_NOTIFICATION_BAR
} from '../constants';

// import { scheduleQueryAgainstQueueCall } fasdfarom './api';


/*
  Saga watchers
*/

export function* watchAutoHideGeneralNotificationBar() {
  yield takeEvery('palceholder', autoHideGeneralNotificationBar);
}

export function* watchShowModalLogin() {
  yield takeEvery('PLACEHOasdfasdfasdfLDER', autoHideGeneralNotificationBar);
}


/*
  end Saga watchers
*/


/*
  Saga Workers
  will be fired on [CONSTANT].REQUEST actions by watchers
*/


function* autoHideGeneralNotificationBar({ payload }) {
  yield put({ type: 'asdfasdf', payload });
}

/*
  end Saga workers
*/
