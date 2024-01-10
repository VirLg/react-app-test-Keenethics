import React from 'react';
import * as Yup from 'yup';
import { useAddBikeMutation } from '../redux/rtkQuery/bikes';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const FormAddBike = () => {
  const [addBike] = useAddBikeMutation();

  const valueForm = data => {
    addBike(data);
  };
  return (
    <Formik
      initialValues={{
        name: '',
        type: '',
        color: '',
        wheelSize: '',
        price: '',
        description: '',
        id: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        type: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        color: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        wheelSize: Yup.number()
          .max(50, 'Must be 50 characters or less')
          .required('Required'),
        price: Yup.number()
          .max(100, 'Must be 100 characters or less')
          .required('Required'),
        description: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        id: Yup.string()
          .max(5, 'Must be 5 characters or less')
          .required('Required'),
      })}
      onSubmit={value => valueForm(value)}
    >
      <Form
        className="form-container"
        style={{ width: '490px', padding: '10px', gap: '12px' }}
      >
        <Field className="field" placeholder="name" name="name" type="text" />
        <ErrorMessage name="name" />

        <Field className="field" placeholder="type" name="type" type="text" />
        <ErrorMessage name="type" />

        <Field className="field" placeholder="color" name="color" type="text" />
        <ErrorMessage name="color" />

        <Field
          className="field"
          placeholder="Wheel Size"
          name="wheelSize"
          type="number"
        />
        <ErrorMessage name="wheelSize" />

        <Field
          className="field"
          placeholder="price"
          name="price"
          type="number"
        />
        <ErrorMessage name="price" />

        <Field className="field" placeholder="id" name="id" type="text" />
        <ErrorMessage name="id" />

        <Field
          name="description"
          className="field-discription"
          placeholder="description"
          type="text"
        />
        <ErrorMessage name="description" />

        <button type="submit" className="button-form">
          Save
        </button>
        <button type="button" className="button-form">
          Clear
        </button>
      </Form>
    </Formik>
  );
};

export default FormAddBike;
