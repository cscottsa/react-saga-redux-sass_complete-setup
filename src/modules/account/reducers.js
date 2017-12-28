// import {
//   LOGIN_USER,
// } from '../constants';
import {
} from '../constants';

// import { FAILURE, INITIAL, SUCCESS } from '../../helpers/constants';

const INITIAL_STATE = {

};

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    // // Billing Details
    // case REMOVE_CARD.SUCCESS:
    //   return {
    //     ...state,
    //   };

    default:
      return { ...state };
  }
}
