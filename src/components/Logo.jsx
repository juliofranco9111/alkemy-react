import React from 'react';
import { Col, Row } from 'react-bootstrap';

export const Logo = () => {
  return (
      <Row className='mx-auto mb-4'>
        <Col
          xs={6}
          className='text-end py-2 px-2 fs-4 border border fw-bold font-monospace'>
          Super
        </Col>
        <Col className='bg-dark text-left py-2 px-2 fs-4 fw-bold text-light font-monospace'>
          Hero
        </Col>
      </Row>
  );
};
