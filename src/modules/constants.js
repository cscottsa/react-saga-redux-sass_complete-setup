import { createRequestTypes } from '../helpers/constants';


/* auth */
/********/
export const LOGIN_USER = createRequestTypes('LOGIN_USER');
export const LOGOUT_USER = createRequestTypes('LOGOUT_USER');
export const RESET_AUTH_DATA = 'RESET_AUTH_DATA';


/* pageLoad */
/******************/
export const APP_LOAD_GET_ME = createRequestTypes('APP_LOAD_GET_ME');
export const APP_LOAD = createRequestTypes('APP_LOAD');
export const SET_PREVIOUS_LOCATION = 'SET_PREVIOUS_LOCATION';
export const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION';


/* user */
/********/
export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';


/* modals */
/**********/
export const SHOW_MODAL_LOADING = 'SHOW_MODAL_LOADING';
export const SHOW_MODAL_LOGIN = createRequestTypes('SHOW_MODAL_LOGIN');
export const SHOW_MODAL_SIGNUP = createRequestTypes('SHOW_MODAL_SIGNUP');
export const SHOW_MODAL_FORGOT_PASSWORD = createRequestTypes('SHOW_MODAL_FORGOT_PASSWORD');
export const SHOW_MODAL_CHANGE_PASSWORD = 'SHOW_MODAL_CHANGE_PASSWORD';
export const SHOW_MODAL_VERIFY_LOCATION = 'SHOW_MODAL_VERIFY_LOCATION';
export const SHOW_MODAL_INFORMATION = 'SHOW_MODAL_INFORMATION';
export const SHOW_MODAL_YES_NO = 'SHOW_MODAL_YES_NO';


/* notifications */
/*****************/
export const UPDATE_NOTIFICATION_ACTIVE = 'UPDATE_NOTIFICATION_ACTIVE';
export const AUTO_HIDE_ERROR_NOTIFICATION = 'AUTO_HIDE_ERROR_NOTIFICATION';
export const AUTO_HIDE_GENERAL_NOTIFICATION = 'AUTO_HIDE_GENERAL_NOTIFICATION';
export const SET_ERROR_NOTIFICATION_TEXT = 'SET_ERROR_NOTIFICATION_TEXT';
export const SET_GENERAL_NOTIFICATION_TEXT = 'SET_GENERAL_NOTIFICATION_TEXT';



/* helpers */
/**********/
export const NAVIGATE = 'NAVIGATE';
export const UPDATE_ROUTER_STATE = 'UPDATE_ROUTER_STATE';
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';
