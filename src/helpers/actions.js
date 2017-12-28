import {
  UPDATE_ROUTER_STATE,
  NAVIGATE,
  RESET_ERROR_MESSAGE
} from '../modules/constants';

export const action = (type, payload = {}) => ({ type, ...payload });

export const updateRouterState = state => action(UPDATE_ROUTER_STATE, { state });
export const navigate = pathname => action(NAVIGATE, { pathname });
export const resetErrorMessage = () => action(RESET_ERROR_MESSAGE);
