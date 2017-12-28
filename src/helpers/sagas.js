// /* eslint-disable no-constant-condition */
import { takeEvery } from 'redux-saga/effects';
import { history } from '../services';
import { NAVIGATE } from '../modules/constants';

/**
 ****************************** WATCHERS ***********************************
 **/

// trigger router navigation via history
export function* watchNavigate() {
  yield takeEvery(NAVIGATE, navigate);
}

function* navigate({ pathname }) {
  yield history.push('/' + pathname);
}

export default {
  watchNavigate
};
