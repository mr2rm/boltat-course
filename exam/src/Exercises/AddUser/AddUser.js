import React from 'react';
import { withRouter } from 'react-router-dom';
import { useUsers } from '../App/App';
// import Form, { Field, ErrorMessage } from './Form';
import { Formik, Field, ErrorMessage } from 'formik';

const AddUser = ({ history }) => {
  const { addUser } = useUsers();
  return (
    <div style={{ padding: '20px' }} className="App">
      <Formik
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Name is required';
          }
          if (values.age > 200) {
            errors.age = 'Age is too large';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            addUser({
              id: Math.random() * 100000000,
              name: values.name,
              gender: values.gender,
              age: values.age,
              children: [],
              marriedTo: []
            });
            history.push('/users');
          }, 2000);
        }}
        initialValues={{
          name: '',
          gender: 'male',
          age: 20
        }}>
        {({ values, handleChange, errors, handleSubmit, isSubmitting }) => {
          return (
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" />
              <br />
              <br />
              <label>Gender</label>
              <Field type="radio" name="gender" value="male" />
              <label>male</label>
              <Field type="radio" name="gender" value="female" />
              <label>female</label>
              <ErrorMessage name="gender" />
              <br />
              <br />
              <label>Age</label>
              <Field type="number" name="age" />
              <ErrorMessage name="age" />
              <br />
              <br />
              <input disabled={isSubmitting} type="submit" />
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default withRouter(AddUser);
