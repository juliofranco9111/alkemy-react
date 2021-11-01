import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { startLogin } from '../actions/auth';
import { getRandomTeam } from '../actions/team';
import { useForm } from '../hooks/useForm';

export const LoginForm = () => {
  const { checking } = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState(null);

  const [values, handleInputChange] = useForm({
    email: 'challenge@alkemy.org',
    password: '',
  });

  const validate = (values) => {
    if (!values.email || values.email.length < 1) {
      setErrors({ email: 'Email is required' });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      setErrors({ invalidEmail: 'Invalid email address' });
    }
    if (!values.password || values.password.length < 1) {
      setErrors({ password: 'Password is required' });
    }

    setErrors(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    validate(values);
    console.log('holi');
    console.log(errors);
    if (errors === null) {
      dispatch(startLogin({ email: values.email, password: values.password }));
      dispatch(getRandomTeam());
      history.push('/home');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-2 font-monospace' controlId='formBasicEmail'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          value={values.email}
          type='text'
          name='email'
          placeholder='Enter email'
        />
      </Form.Group>
      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          value={values.password}
          type='password'
          name='password'
          required
          placeholder='Password'
        />
      </Form.Group>

      <div className='mt-3'>
        {errors && (errors.email || errors.invalidEmail) && (
          <Alert variant='danger'>{errors.email || errors.invalidEmail}</Alert>
        )}
        {errors && errors.password && (
          <Alert variant='danger'>{errors.password}</Alert>
        )}
      </div>
      <Button
        style={{ width: '100%' }}
        className='mx-auto border justify-content-center d-flex'
        variant='dark'
        type='submit'>
        {checking ? 'Loading…' : 'Submit'}
      </Button>
    </Form>
  );
};
