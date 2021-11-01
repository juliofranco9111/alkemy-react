import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { CardCustom } from './Card';

export const GridCardsHome = () => {
  const { heroes, loading } = useSelector((state) => state.team);
  if (loading) {
    return <div className="h100 fs-1">Loading...</div>;
  } else {
    return (
      <Container className='mt-4'>
        <Row>
          {heroes &&
            heroes.heroes.map((hero) => (
              <Col key={hero.name} xs={12} md={6} xl={4}>
                <CardCustom hero={hero} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
};
