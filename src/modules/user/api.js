// import axios from 'axios';
//
// import config from '../../config';
//
// import { enums } from '../../helpers/constants';
//
//
// export function signupCall(firstName, lastName, contactNumber, email, password) {
//   return axios.post(`${config.apiBaseUrl}/users/signup`, { firstName, lastName, contactNumber, email, password, role: enums.USER_ROLE_CUSTOMER, type: enums.USER_TYPE_CUSTOMER }, { withCredentials: true })
//   .then((response) => {
//     return response.json().data;
//   })
//   .catch((error) => {
//     throw error;
//   });
// }
