import React from 'react';
import { Field, ErrorMessage } from 'formik';

const CustomInput = ({ label, name, type = 'text', ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        className="form-control"
        {...rest}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-danger mt-1"
      />
    </div>
  );
};

export default CustomInput;
