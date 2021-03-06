import React from 'react';
import './RenderField.scss'

const RenderField = props => {
  const { input, label, novalidate, type, className, meta: {touched, error}} = props;
  return (
    <div>
      <label className="fieldTitle">{label}<span>*</span></label>
      <div>
        <input {...input} className={className} placeholder={label} type={type} />
        {touched && error && !novalidate && <p><span className="errorMsg">{error}</span></p>}
      </div>
    </div>
  );
}
export default RenderField