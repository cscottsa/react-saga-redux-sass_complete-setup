import {
  AUTO_HIDE_ERROR_NOTIFICATION,
  AUTO_HIDE_GENERAL_NOTIFICATION,
  SET_ERROR_NOTIFICATION_TEXT,
  SET_GENERAL_NOTIFICATION_TEXT,
  UPDATE_NOTIFICATION_ACTIVE,
} from '../constants';


export function updateNotificationActive(boolean) {
  return {
    type: UPDATE_NOTIFICATION_ACTIVE,
    payload: boolean
  };
}


// General
export function doAutoHideGeneralNotification(autoHide) {
  return {
    type: AUTO_HIDE_GENERAL_NOTIFICATION,
    autoHide
  };
}

export function setGeneralNotificationText(text) {
  return {
    type: SET_GENERAL_NOTIFICATION_TEXT,
    text
  };
}


// Error
export function doAutoHideErrorNotification(autoHide) {
  return {
    type: AUTO_HIDE_ERROR_NOTIFICATION,
    autoHide
  };
}

export function setErrorNotificationText(text) {
  return {
    type: SET_ERROR_NOTIFICATION_TEXT,
    text
  };
}
