import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomInput from './CustomInput';

const MyForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const onSubmit = (values) => {
    console.log('Form Data', values);
    alert('Form submitted successfully!');
  };

  return (
    <div className="container mt-5">
      <h1>Formik Form with Custom Inputs</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <CustomInput label="Name" name="name" />
            <CustomInput label="Email" name="email" type="email" />
            <CustomInput label="Password" name="password" type="password" />
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
