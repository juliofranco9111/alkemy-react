import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CardCustom } from './Card'

export const GridCardsHome = () => {
    const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <Container className='mt-4'>
          <Row>
            {cols.map((col) => (
              <Col key={col} xs={12} md={6} xl={4}>
                <CardCustom />
              </Col>
            ))}
          </Row>
        </Container>
    )
}
