import { enums } from './constants';

/* Day Enums list */
// toDayNameShort
// toDayNameNormal
// toDayPartHours
// toDayPartLabel


export function toDayNameShort(dayEnum) {
  if (dayEnum) {
    dayEnum = dayEnum.toString();
    switch (dayEnum) {
      case enums.WEEKDAY_MONDAY:
        return 'Mon';
      case enums.WEEKDAY_TUESDAY:
        return 'Tue';
      case enums.WEEKDAY_WEDNESDAY:
        return 'Wed';
      case enums.WEEKDAY_THURSDAY:
        return 'Thu';
      case enums.WEEKDAY_FRIDAY:
        return 'Fri';
      case enums.WEEKDAY_SATURDAY:
        return 'Sat';
      case enums.WEEKDAY_SUNDAY:
        return 'Sun';

      default:
        return 'Null';
    }
  } else {
    return 'Null';
  }
}

export function toDayNameNormal(dayEnum) {
  if (dayEnum) {
    dayEnum = dayEnum.toString();
    switch (dayEnum) {
      case enums.WEEKDAY_MONDAY:
        return 'Monday';
      case enums.WEEKDAY_TUESDAY:
        return 'Tuesday';
      case enums.WEEKDAY_WEDNESDAY:
        return 'Wednesday';
      case enums.WEEKDAY_THURSDAY:
        return 'Thursday';
      case enums.WEEKDAY_FRIDAY:
        return 'Friday';
      case enums.WEEKDAY_SATURDAY:
        return 'Saturday';
      case enums.WEEKDAY_SUNDAY:
        return 'Sunday';

      default:
        return 'Null';
    }
  } else {
    return 'Null';
  }
}

export function toDayPartHours(dayPart) {
  if (dayPart) {
    dayPart = dayPart.toString();
    switch (dayPart) {
      case enums.CLEANING_DURATION_INDIVIDUAL_FULL_DAY:
        return '8 hours';
      case enums.CLEANING_DURATION_INDIVIDUAL_HALF_DAY_MORNING:
        return '4 hours';
      case enums.CLEANING_DURATION_INDIVIDUAL_HALF_DAY_AFTERNOON:
        return '4 hours';

      default:
        return 'Null';
    }
  } else {
    return 'Null';
  }
}

export function toDayPartLabel(dayPart) {
  if (dayPart) {
    dayPart = dayPart.toString();
    switch (dayPart) {
      case enums.CLEANING_DURATION_INDIVIDUAL_FULL_DAY:
        return 'Full day';
      case enums.CLEANING_DURATION_INDIVIDUAL_HALF_DAY_AFTERNOON:
        return 'Afternoon';
      case enums.CLEANING_DURATION_INDIVIDUAL_HALF_DAY_MORNING:
        return 'Morning';

      default:
        return 'Null';
    }
  } else {
    return 'Null';
  }
}

export function toDayPartAmount(dayPart, rates) {
  if (dayPart) {
    dayPart = dayPart.toString();
    switch (dayPart) {
      case enums.CLEANING_DURATION_INDIVIDUAL_FULL_DAY:
        return rates.customerFullDay;
      case enums.CLEANING_DURATION_INDIVIDUAL_HALF_DAY_MORNING:
        return rates.customerHalfDayMorning;
      case enums.CLEANING_DURATION_INDIVIDUAL_HALF_DAY_AFTERNOON:
        return rates.customerHalfDayAfternoon;

      default:
        return 'Null';
    }
  } else {
    return 'Null';
  }
}
