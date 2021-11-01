import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';

export const CardCustom = () => {
  const powers = [
    { stat: 'Intelligence', value: 85 },
    { stat: 'Strength', value: 85 },
    { stat: 'Power', value: 85 },
    { stat: 'Durability', value: 85 },
    { stat: 'Speed', value: 85 },
    { stat: 'Combat', value: 85 },
  ];

  return (
    <Card className='flex-row mb-3'>
      <Col xs={4}>
        <Image
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          variant='top'
          src='https://www.superherodb.com/pictures2/portraits/10/100/956.jpg'
        />
      </Col>
      <Col>
        <Card.Body className="m-0 py-2">
          <Card.Title className='fs-5 m-0'>Batman</Card.Title>
          <Card.Subtitle className='text-muted'>Dark Night</Card.Subtitle>
          <Row className='mb-1 mt-2 no-wrap'>
            {powers.map((power) => {
              return (
                <Row className='flex-row wrap' key={power.stat}>
                  <Col xs={8}>
                    <Card.Text>
                      {power.stat}
                    </Card.Text>
                  </Col>
                  <Col xs={4}>
                    <Card.Text className='fw-bold text-center'>
                      {power.value}
                    </Card.Text>
                  </Col>
                </Row>
              );
            })}
          </Row>
          <Row>
            <Col>
              <Card.Link href='#'>Card Link</Card.Link>
            </Col>
            <Col>
              <Card.Link href='#'>Another Link</Card.Link>
            </Col>
          </Row>
        </Card.Body>
      </Col>
    </Card>
  );
};
