import React from 'react';
import * as Yup from 'yup';
import { useAddBikeMutation } from '../redux/rtkQuery/bikes';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const FormAddBike = () => {
  const [addBike] = useAddBikeMutation();

  const valueForm = data => {
    console.log('data1', data);
    addBike(data);
  };
  return (
    <Formik
      initialValues={{ name: '', type: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        type: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      })}
      onSubmit={value => valueForm(value)}
    >
      <Form>
        <label htmlFor="name">First Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />

        <label htmlFor="type">Last Name</label>
        <Field name="type" type="text" />
        <ErrorMessage name="type" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormAddBike;
