import React, { memo, useCallback, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { startChecking } from '../actions/auth';
import { LoginForm } from '../components/LoginForm';
import { Logo } from '../components/Logo';

export const Login = () => {
  const dispatch = useDispatch();

  const checkUser = useCallback(() => {
    dispatch(startChecking());
    console.log('Login');
  }, []);

  useEffect(() => {
    console.log('repainted');
  }, [checkUser]);

  return (
    <div className='h100'>
      <Container style={{ maxWidth: '500px' }}>
        <Row className='bg-ligth'>
          <Col className=''>
            <Logo />
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
