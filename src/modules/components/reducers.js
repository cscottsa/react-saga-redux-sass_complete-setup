// import {
//   UPDATE_CENTER_MARKERS,
//   UPDATE_BOUNDS_CENTER
// } from '../constants';

const INITIAL_STATE = {

};

export default function componentsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    // Google Maps
    // case UPDATE_CENTER_MARKERS:
    //   return {
    //     ...state,
    //     googleMapsData: {
    //       ...state.googleMapsData,
    //       center: action.center,
    //       markers: action.markers
    //     }
    //   };

    default:
      return { ...state };
  }
}
