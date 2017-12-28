import axios from 'axios';

import config from '../../config';

// import { enums } from '../../helpers/constants';


export function getMe() {
  return axios.get(`${config.apiBaseUrl}/users/me`, { withCredentials: true })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    throw error;
  });
}
//
export function loginCall(email, password) {
  return axios.post(`${config.apiBaseUrl}/users/signin`, { email, password }, { withCredentials: true })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    throw error;
  });
}
//
// export function forgotPasswordCall(email) {
//   return axios.post(`${config.apiBaseUrl}/users/forgot`, { email }, { withCredentials: true })
//   .then((response) => {
//     return response.data;
//   })
//   .catch((error) => {
//     throw error;
//   });
// }
//
// export function resetPasswordCall(values, accessToken) {
//   return axios.post(`${config.apiBaseUrl}/users/passwordReset/${accessToken}`, values, { withCredentials: true })
//   .then((response) => {
//     return response.data;
//   })
//   .catch((error) => {
//     throw error;
//   });
// }
//
// export function logout() {
//   return axios.get(`${config.apiBaseUrl}/users/signOut`, { withCredentials: true })
//   .then((response) => {
//     return response;
//   })
//   .catch((error) => {
//     throw error;
//   });
// }
