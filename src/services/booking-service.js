import Moment from 'moment';

import { INACTIVE, enums } from '../helpers/constants';

export function isBookingProcessActive(bookingProcessStatus, browserHistory) {

  if (bookingProcessStatus === INACTIVE) {
    browserHistory.push('/');
    return false;
  }

  return true;
}

export function isUserLoggedCheck(user, browserHistory) {
  if (!user._id) {
    browserHistory.push('/');
    return false;
  }

  return true;
}

export function startTimeBasedOnDayPart(dayPart) {
  const _dayPart = parseInt(dayPart);
  const strDayPart = _dayPart.toString(); // Making sure dayPart is string
  if (strDayPart === enums.CLEANING_DURATION_INDIVIDUAL_FULL_DAY) {
    return new Moment().hours(8).minutes(0).toISOString();
  }
  if (strDayPart === enums.CLEANING_DURATION_INDIVIDUAL_HALF_DAY_MORNING) {
    return new Moment().hours(8).minutes(0).toISOString();
  }
  if (strDayPart === enums.CLEANING_DURATION_INDIVIDUAL_HALF_DAY_AFTERNOON) {
    return new Moment().hours(13).minutes(0).toISOString();
  }
  console.log('Error startTimeBasedOnDayPart(): incorrect dayPart received');
}

export function dummyMethod() {
  console.log('dummy method');
}
