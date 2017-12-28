import {
  AUTO_HIDE_ERROR_NOTIFICATION,
  AUTO_HIDE_GENERAL_NOTIFICATION, SET_ERROR_NOTIFICATION_TEXT,
  SET_GENERAL_NOTIFICATION_TEXT,
  UPDATE_NOTIFICATION_ACTIVE,
} from '../constants';

const INITIAL_STATE = {
  notificationActive: false, // ALWAYS include into toggles, used header height.

  generalNotification: {
    autoHide: false,
    text: ''
  },

  errorNotification: {
    autoHide: false,
    text: ''
  }
};

export default function notificationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_NOTIFICATION_ACTIVE:
      return {
        ...state,
        notificationActive: action.payload
      };


    // General
    case AUTO_HIDE_GENERAL_NOTIFICATION:
      return {
        ...state,
        generalNotification: {
          ...state.generalNotification,
          autoHide: action.autoHide,
        }
      };

    case SET_GENERAL_NOTIFICATION_TEXT:
      return {
        ...state,
        generalNotification: {
          ...state.generalNotification,
          text: action.text,
        }
      };


    // Error
    case AUTO_HIDE_ERROR_NOTIFICATION:
      return {
        ...state,
        errorNotification: {
          ...state.errorNotification,
          autoHide: action.autoHide,
        }
      };

    case SET_ERROR_NOTIFICATION_TEXT:
      return {
        ...state,
        errorNotification: {
          ...state.errorNotification,
          text: action.text,
        }
      };

    default:
      return { ...state };
  }
}
