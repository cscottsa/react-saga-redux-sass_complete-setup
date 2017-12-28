import React from 'react';

export default function Input(field) {
  const { input, label, alwaysHideLabel = false, placeholder, type, className, meta: { touched, error, warning } } = field;
  const containerClassName = (touched && error) ? 'form-group form-group--error' : 'form-group';

  return (
    <div className={containerClassName}>
      {!alwaysHideLabel && (label ? <label>{label}</label> : <label className="hidden-xs hidden-sm" />) }
      <input {...input} type={type} placeholder={placeholder} className={className} />
      {touched && ((error && <label className="error">{error}</label>) || (warning && <label className="error">{warning}</label>))}
    </div>
  );
}
