import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';
import { reducer as fileUpload } from 'redux-file-upload';
import account from './account/reducers';
import auth from './auth/reducers';
import components from './components/reducers';
import modalReducer from './modals/reducers';
import notifications from './notifications/reducers';
import pageLoad from './pageLoad/reducers';
import user from './user/reducers';

const rootReducer = combineReducers({
  form,
  fileUpload,
  account,
  auth,
  components,
  modals: modalReducer,
  notifications,
  pageLoad,
  user,
});

export default rootReducer;
