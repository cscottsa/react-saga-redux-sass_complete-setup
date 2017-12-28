import { fork, join } from 'redux-saga/effects';
// IMPORT ALL SAGA WATCHERS
import {
  // watchForgotPassword,
} from './auth/sagas';
import {
  // watchChangeCleanerOnSchedule
} from './account/sagas';
import { watchNavigate } from '../helpers/sagas';
import { watchAppLoadGetMe } from './pageLoad/sagas';
import {
  watchShowModalForgotPassword,
  watchShowModalLogin,
  watchShowModalSignup,
} from './modals/sagas';
import {
  watchAutoHideGeneralNotificationBar
} from './notifications/sagas';


// // CUSTOM METHOD FOR USAGE AT server.js TO RUN SAGAS ON SERVER SIDE (e.g. fetch data)
export const waitAll = sagas => function* genTasks() {
  const tasks = yield sagas.map(([saga, ...params]) => fork(saga, ...params));
  yield tasks.map(join);
};
//
// // CONSOLIDATE AND EXPORT ALL SAGAS
export default function* rootSaga() {
  yield [
    watchNavigate(),

    /* Auth */

    /* pageLoad */
    watchAppLoadGetMe(),


    /* Notifications */
    watchAutoHideGeneralNotificationBar(),

    /* Modal */
    watchShowModalLogin(),
    watchShowModalSignup(),
    watchShowModalForgotPassword(),
  ];
}
