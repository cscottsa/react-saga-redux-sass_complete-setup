import {
  UPDATE_ROUTER_STATE,
  RESET_ERROR_MESSAGE
} from '../modules/constants';

// Updates error message to notify about the failed fetches.
export const errorMessage = (state = null, action) => {
  const { type, error } = action;

  if (type === UPDATE_ROUTER_STATE) {
    return null;
  } else if (error) {
    return action.error;
  }

  return state;
};

export const router = (state = { pathname: '/' }, action) => {
  switch (action.type) {
    case RESET_ERROR_MESSAGE:
      return action.state;
    default:
      return state;
  }
};

export default {
  errorMessage,
  router
};
