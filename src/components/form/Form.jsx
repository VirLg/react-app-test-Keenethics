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
          .min(5, 'Min Must be 5 characters or less')
          .required('Required'),
        type: Yup.string()
          .min(5, 'Min Must be 5 characters or less')
          .required('Required'),
        color: Yup.string()
          .min(5, 'Min Must be 5 characters or less')
          .required('Required'),
        wheelSize: Yup.number()
          .min(10, 'Minimum Must be  10 ')
          .max(50, 'Maximum Must be  50 ')
          .required('Required'),
        price: Yup.number().max(100, 'Must be 100').required('Required'),
        description: Yup.string()
          .min(5, 'Min Must be 5 characters or less')
          .required('Required'),
        id: Yup.string()
          .min(5, 'Min Must be 5 characters or less')
          .required('Required'),
      })}
      onSubmit={value => valueForm(value)}
    >
      <Form
        className="form-container"
        style={{ width: '490px', padding: '10px', gap: '12px' }}
      >
        <Field className="field" placeholder="name" name="name" type="text" />
        <ErrorMessage name="name">{errorMsg => alert(errorMsg)}</ErrorMessage>

        <Field className="field" placeholder="type" name="type" type="text" />
        <ErrorMessage name="type">{errorMsg => alert(errorMsg)}</ErrorMessage>

        <Field className="field" placeholder="color" name="color" type="text" />
        <ErrorMessage name="color">{errorMsg => alert(errorMsg)}</ErrorMessage>

        <Field
          className="field"
          placeholder="Wheel Size must be on 10 to 50"
          name="wheelSize"
          type="number"
        />
        <ErrorMessage name="wheelSize">
          {errorMsg => alert(errorMsg)}
        </ErrorMessage>

        <Field
          className="field"
          placeholder="price"
          name="price"
          type="number"
        />
        <ErrorMessage name="price">{errorMsg => alert(errorMsg)}</ErrorMessage>

        <Field className="field" placeholder="id" name="id" type="text" />
        <ErrorMessage name="id">{errorMsg => alert(errorMsg)}</ErrorMessage>

        <Field
          name="description"
          className="field-discription"
          placeholder="description"
          type="text"
        />
        <ErrorMessage name="description">
          {errorMsg => alert(errorMsg)}
        </ErrorMessage>

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
