import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { CardCustom } from './Card';

export const SearchGridCard = ({heroes}) => {

  if(heroes){

    
    return (
      <Container className='mt-4'>
          <Row>
            {heroes &&
              heroes.map((hero, idx) => (
                <Col key={hero.name+idx} xs={12} md={6} xl={4}>
                  <CardCustom search={true} hero={hero} />
                </Col>
              ))}
          </Row>
        </Container>
      );
    }else{
      return <div><h3 className="font-monospace mt-2">No se encontraron resultados...</h3></div>
    } 
    }
