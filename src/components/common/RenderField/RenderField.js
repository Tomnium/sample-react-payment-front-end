import React from 'react';
import './RenderField.scss'

const RenderField = props => {
  const { label, type, className} = props;
  return (
    <div>
      <label className="fieldTitle">{label}<span>*</span></label>
      <div>
        <input className={className} placeholder={label} type={type} />
      </div>
    </div>
  );
}
export default RenderField