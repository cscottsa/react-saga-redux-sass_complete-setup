import {
  APP_LOAD,
  SET_PREVIOUS_LOCATION,
  SET_CURRENT_LOCATION,
} from '../constants';

const INITIAL_STATE = {
  appLoaded: false,

  previousLocation: {},
  currentLocation: {}
};

export default function pageLoadReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    // App load
    case APP_LOAD.SUCCESS:
      return {
        ...state,
        appLoaded: true
      };

    case APP_LOAD.REQUEST:
      return {
        ...state,
        appLoaded: false
      };

    case SET_PREVIOUS_LOCATION:
      return {
        ...state,
        previousLocation: action.location
      };

    case SET_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.location
      };

    default:
      return { ...state };
  }
}
