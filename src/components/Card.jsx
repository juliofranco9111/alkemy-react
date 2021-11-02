import React from 'react';
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const CardCustom = ({ hero, search = false }) => {

  const history = useHistory();
  const powerstats = hero.powerstats;
  const alignment = hero.biography.alignment;

  const powers = [
    { stat: 'Intelligence', value: powerstats.intelligence },
    { stat: 'Strength', value: powerstats.strength },
    { stat: 'Power', value: powerstats.power },
    { stat: 'Speed', value: powerstats.speed },
    { stat: 'Durability', value: powerstats.durability },
    { stat: 'Combat', value: powerstats.combat },
  ];

  const navigate = () => {
    history.push(`/details/${hero.id}`);
    console.log(hero.id);
  };


  return (
    <Card
      className='flex-row mb-3'
      bg={alignment !== 'good' && 'dark'}
      text={alignment !== 'good' && 'white'}>
      <Col xs={4}>
        <Image
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          variant='top'
          src={hero.image.url}
        />
      </Col>
      <Col>
        <Card.Body className='m-0 py-2'>
          <Card.Title className='fs-5 m-0'>{hero.name}</Card.Title>
          <Card.Subtitle className='text-muted'>
            {alignment === 'good' ? 'Good' : 'Bad'}
          </Card.Subtitle>
          <Row className='mb-1 mt-2 no-wrap'>
            {powers.map((power) => {
              return (
                <Row className='flex-row wrap' key={power.stat}>
                  <Col xs={8}>
                    <Card.Text>{power.stat}</Card.Text>
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
            <Col className='text-end'>
              <Button className='btn btn-light mt-2' onClick={()=> navigate()}>
                Details
              </Button>
            </Col>
            <Col>
              {search ? (
                <Card.Link className='btn btn-light mt-2' href='#'>
                  Add +
                </Card.Link>
              ) : (
                <Card.Link className='btn btn-light mt-2' href='#'>
                  Remove -
                </Card.Link>
              )}
            </Col>
          </Row>
        </Card.Body>
      </Col>
    </Card>
  );
};
