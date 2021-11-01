import React from 'react';
import { Card, CardImg, Col, Row } from 'react-bootstrap';

export const CardDetail = () => {
  const stats = [
    { stat: 'weight', value: 98 },
    { stat: 'height', value: 50 },
    { stat: 'fullName', value: 'El chombo' },
    { stat: 'aliases', value: 'The darko moon, the light of the sun' },
    { stat: 'eyeColor', value: 'blue' },
    { stat: 'hairColor', value: 'brown' },
    { stat: 'base', value: 'Earth' },
  ];

  return (
    <Card
      className=''
      style={{
        maxWidth: '1000px',
        margin: '30px auto',
      }}>
      <Card.Body>
        <Row>
          <Col md={6}>
            <CardImg
              className='image-cover'
              variant='top'
              src='https://www.superherodb.com/pictures2/portraits/10/100/956.jpg'
              alt='Card image'
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </Col>
          <Col className='centered-content p-2'>
            <Card.Title className='fs-2 fw-bold text-center font-monospace'>
              El Chombo
            </Card.Title>

            {stats.map((stat) => {
              return (
                <Row key={stat.stat}>
                  <Col>
                    <Card.Text className='text-end font-monospace'>
                      {stat.stat}
                    </Card.Text>
                  </Col>
                  <Col>
                    <Card.Text className='font-monospace'>
                      {stat.value}
                    </Card.Text>
                  </Col>
                </Row>
              );
            })}

            <Row>
              <Col xs={6} className='text-end'>
                <Card.Link className='font-monospace'>Card Link</Card.Link>
              </Col>
              <Col>
                <Card.Link href='#'>Another Link</Card.Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
