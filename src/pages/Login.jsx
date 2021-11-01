import React from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from 'react-bootstrap';
import { LoginForm } from '../components/LoginForm';
import { Logo } from '../components/Logo';

export const Login = () => {
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
