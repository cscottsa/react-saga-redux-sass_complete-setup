import { SET_USER, UNSET_USER } from '../constants';

const INITIAL_STATE = {
  user: {},
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {


    /* User */
    /********/

    case SET_USER:
      return {
        ...state,
        user: action.user
      };

    case UNSET_USER:
      return {
        ...state,
        user: {}
      };

    default:
      return { ...state };
  }
}
