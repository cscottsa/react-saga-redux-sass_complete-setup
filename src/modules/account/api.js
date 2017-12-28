import axios from 'axios';

import config from '../../config';

// Dummy comment template
/**
 *
 * @param cardId
 * @param scheduleId Optional param to target a specific schedule by Id
 * @returns {Promise.<T>}
 */


export function getMe() {
  return axios.get(`${config.apiBaseUrl}/users/me`, { withCredentials: true })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function updateUserCall(postData) {
  return axios.put(`${config.apiBaseUrl}/users/me`, postData, { withCredentials: true })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function updateUserProfileCall(firstName, lastName, email, contactNumber, dateOfBirth, gender, avatar) {
  const postData = {
    firstName,
    lastName,
    email,
    contactNumber,
    dateOfBirth,
    gender
  };

  if (avatar) {
    postData.avatar = avatar;
  }

  return axios.put(`${config.apiBaseUrl}/users/me`, postData, { withCredentials: true })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function changePasswordCall(currentPassword, newPassword, verifyPassword) {
  const postData = {
    currentPassword,
    newPassword,
    verifyPassword
  };

  return axios.post(`${config.apiBaseUrl}/users/password`, postData, { withCredentials: true })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}


export function getMyBookingsCall() {
  return axios.get(`${config.apiBaseUrl}/bookings/me`, { withCredentials: true })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}
