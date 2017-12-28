import {
  APP_LOAD_GET_ME,
  SET_PREVIOUS_LOCATION,
  SET_CURRENT_LOCATION
} from '../constants';

// Show modal actions
export function appLoadGetMe() {
  return {
    type: APP_LOAD_GET_ME.REQUEST
  };
}

export function setPreviousLocation(location) {
  return {
    type: SET_PREVIOUS_LOCATION,

    location
  };
}

export function setCurrentLocation(location) {
  return {
    type: SET_CURRENT_LOCATION,

    location
  };
}
