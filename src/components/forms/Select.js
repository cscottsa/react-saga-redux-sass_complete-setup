import React from 'react';

export default function Select(field) {
  const { select, children, label, placeholder, type, className, meta: { touched, error, warning } } = field;
  const containerClassName = (touched && error) ? 'form-group form-group--error' : 'form-group';

  return (
    <div className={containerClassName}>
      {label ? <label>{label}</label> : <label className="hidden-xs hidden-sm" /> }
      <select {...select} type={type} placeholder={placeholder} className={className}>
        {children}
      </select>
      {touched && ((error && <label className="error">{error}</label>) || (warning && <label className="error">{warning}</label>))}
    </div>
  );
}
