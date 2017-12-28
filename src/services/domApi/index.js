import axios from 'axios';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';
// import { STATIC_ERROR, FETCH_USER } from './types';
import config from '../../config';

//= ===============================
// Utility actions
//= ===============================

export function errorHandler(dispatch, error, type) {
  console.log('Error type: ', type);
  console.log(error);

  let errorMessage;
  if (typeof error.response !== 'undefined') {
    errorMessage = error.response.data;
  } else if (typeof error.request !== 'undefined') {
    errorMessage = JSON.parse(error.request.responseText).message;
  } else {
    errorMessage = error;
  }

  // NOT AUTHENTICATED ERROR
  if (error.status === 401 || (error.response && error.response.status === 401)) {
    // errorMessage = 'You are not authorized to do this.';
    // return dispatch(logoutUser(''));
    browserHistory.push('/');
  }

  dispatch({
    type,
    payload: errorMessage,
  });
}

export function fetchUser(uid) {
  return function (dispatch) {
    axios.get(`${config.apiBaseUrl}/user/${uid}`, {
      headers: { Authorization: cookie.load('token') },
    })
    .then((response) => {
      dispatch({
        // type: FETCH_USER,
        payload: response.data.user,
      });
    })
    .catch(response => dispatch(errorHandler(response.data.error)));
  };
}

// Post Request
export function postData(action, errorType, isAuthReq, url, dispatch, data) {
  const requestUrl = config.apiBaseUrl + url;
  let headers = {};

  if (isAuthReq) {
    headers = { headers: { Authorization: cookie.load('token') } };
  }

  axios.post(requestUrl, data, headers)
  .then((response) => {
    dispatch({
      type: action,
      payload: response.data,
    });
  })
  .catch((error) => {
    errorHandler(dispatch, error.response, errorType);
  });
}

// Get Request
export function getData(action, errorType, isAuthReq, url, dispatch) {
  const requestUrl = config.apiBaseUrl + url;
  let headers = {};

  if (isAuthReq) {
    headers = { headers: { Authorization: cookie.load('token') } };
  }

  axios.get(requestUrl, headers)
  .then((response) => {
    dispatch({
      type: action,
      payload: response.data,
    });
  })
  .catch((error) => {
    errorHandler(dispatch, error.response, errorType);
  });
}

// Put Request
export function putData(action, errorType, isAuthReq, url, dispatch, data) {
  const requestUrl = config.apiBaseurl + url;
  let headers = {};

  if (isAuthReq) {
    headers = { headers: { Authorization: cookie.load('token') } };
  }

  axios.put(requestUrl, data, headers)
  .then((response) => {
    dispatch({
      type: action,
      payload: response.data,
    });
  })
  .catch((error) => {
    errorHandler(dispatch, error.response, errorType);
  });
}

// Delete Request
export function deleteData(action, errorType, isAuthReq, url, dispatch) {
  const requestUrl = config.apiBaseUrl + url;
  let headers = {};

  if (isAuthReq) {
    headers = { headers: { Authorization: cookie.load('token') } };
  }

  axios.delete(requestUrl, headers)
  .then((response) => {
    dispatch({
      type: action,
      payload: response.data,
    });
  })
  .catch((error) => {
    errorHandler(dispatch, error.response, errorType);
  });
}
