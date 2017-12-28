import _ from 'lodash';
import Moment from 'moment';

export function getDifScheduleIdFromUserWeeklyOccupiedSchedules(oldUser, updatedUser) {
  const difOccupiedSchedules = _.differenceBy(updatedUser.weeklyOccupiedSchedule, oldUser.weeklyOccupiedSchedule, 'sharedId');

  let latestSchedule = '';
  difOccupiedSchedules.forEach((item) => {
    if (!latestSchedule) {
      latestSchedule = item;
    } else {

      if (Moment(item.created).isAfter(Moment(latestSchedule.created))) {
        latestSchedule = item;
      }
    }
  });
  return latestSchedule.sharedId;
}

export function placholderFunction() {
  console.log('placeholder');
}
