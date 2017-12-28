// Componented code is placeholder text as example
//
//
// import axios from 'axios';
//
// import config from '../../config';
// // import { enums } from '../../helpers/constants';
//
// import queryParamObjToString from '../../helpers/api/methods';
//
// export function getArea(term) {
//   return axios.get(`${config.apiBaseUrl}/areas${queryParamObjToString({ term })}`, { withCredentials: true })
//   .then((response) => {
//     return response.data;
//   })
//   .catch((error) => {
//     throw error;
//   });
// }
//
// export function scheduleQueryAgainstQueueCall(areaId, schedule) {
//   return axios.post(`${config.apiBaseUrl}/users/cleaners/scheduleQuery`, { areasOfService: areaId, requestingSchedule: schedule }, { withCredentials: true })
//   .then((response) => {
//     return response.data;
//   })
//   .catch((error) => {
//     throw error;
//   });
// }
