// import React from 'react';
// import moment from 'moment';
// import DatePicker from 'react-datepicker';
//
// export default function DatePick(field) {
//   const { input, label, alwaysHideLabel = false, meta: { touched, error, warning } } = field;
//   const containerClassName = (touched && error) ? 'form-group form-group--error' : 'form-group';
//
//   return (
//     <div className={containerClassName}>
//       {!alwaysHideLabel && (label ? <label>{label}</label> : <label className="hidden-xs hidden-sm" />) }
//       <DatePicker {...input} dateForm="MM/DD/YYYY" readOnly={true} selected={input.value ? moment(input.value) : null} />
//       {touched && ((error && <label className="error">{error}</label>) || (warning && <label className="error">{warning}</label>))}
//     </div>
//   );
// }


import React from 'react';
import Moment from 'moment';
import { DatePickerInput } from 'rc-datepicker';

export default function DatePick(field) {
  const { input, label, alwaysHideLabel = false, meta: { touched, error, warning } } = field;
  const containerClassName = (touched && error) ? 'form-group form-group--error' : 'form-group';

  return (
    <div className={containerClassName}>
      {!alwaysHideLabel && (label ? <label>{label}</label> : <label className="hidden-xs hidden-sm" />) }
      <DatePickerInput
        format="MM/DD/YYYY"
        validationFormat="MM/DD/YYYY"
        returnFormat="MM/DD/YYYY"
        value={Moment(input.value).format('YYYY-MM-DD')}
        className='my-custom-datepicker-component'
        {...input}
      />
      {/*<DatePicker {...input} dateForm="MM/DD/YYYY" readOnly={true} selected={input.value ? moment(input.value) : null} />*/}
      {touched && ((error && <label className="error">{error}</label>) || (warning && <label className="error">{warning}</label>))}
    </div>
  );
}

