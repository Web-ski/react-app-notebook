import React from 'react';
import axios from 'axios';
import Button from 'components/atoms/Button/Button';
import { Formik, Form, Field } from 'formik';

const Login = () => {
  const getTest = () => {
    axios.get('http://localhost:3000/api/login/?get=1').then((response) => {
      // handle success
      console.log(response);
    });
  };
  return (
    <div>
      <Formik initialValues={{ username: '', password: '' }}
onSubmit={() => console.log('hej')}>
        {() => (
          <Form>
            <Field name="username"
type="text" />
            <Field name="password"
type="password" />
            <button type="submit">Sign in</button>
          </Form>
        )}
      </Formik>
      <Button onClick={() => getTest()}>Get</Button>
      <Button>Send</Button>
    </div>
  );
};

export default Login;
