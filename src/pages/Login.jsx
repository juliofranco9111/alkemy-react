import React from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from 'react-bootstrap';
import { Logo } from '../components/Logo';

export const Login = () => {
  return (
    <div className='h100'>
      <Container style={{ maxWidth: '500px' }}>
        <Row className='bg-ligth'>
          <Col className=''>
            <Logo />
            <Form>
              <Form.Group className='mb-2 font-monospace' controlId='formBasicEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>
              <Button style={{width: '100%'}} className='mx-auto font-monospace border justify-content-center mt-4 d-flex'variant='light' type='submit'>
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
