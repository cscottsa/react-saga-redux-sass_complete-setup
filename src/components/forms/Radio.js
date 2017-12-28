import React from 'react';

export default function Radio(field) {
  const { input, radioLabel = 'default', forId, label, alwaysHideLabel = false, placeholder, className, meta: { touched, error, warning } } = field;
  const containerClassName = (touched && error) ? 'form-group form-group--error' : 'form-group';

  return (
    <div className={containerClassName}>
      {!alwaysHideLabel && (label ? <label>{label}</label> : <label className="hidden-xs hidden-sm" />) }
      <div className="radio-group">
        <input {...input} type="radio" placeholder={placeholder} className={className} id={'#' + forId} />
        <label htmlFor={'#' + forId}>{ radioLabel }</label>
      </div>
      {touched && ((error && <label className="error">{error}</label>) || (warning && <label className="error">{warning}</label>))}
    </div>
  );
}
