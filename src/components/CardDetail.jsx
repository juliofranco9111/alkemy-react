import React, { useEffect, useState } from 'react';
import { Button, Card, CardImg, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchHeroById } from '../helpers/fetchAuth';

export const CardDetail = () => {
  const { id } = useParams();
  const  history = useHistory();
  
  const [hero, setHero] = useState(null);

  const heroFetch = fetchHeroById(id);

  useEffect(() => {
    heroFetch.then((res) => {
      setHero(res.data);
    });
  }, []);

  if (hero) {
    const alignment = hero.biography.alignment;
    const stats = {
      weight: hero.appearance.weight[1],
      height: hero.appearance.height[1],
      eye: hero.appearance['eye-color'],
      hair: hero.appearance['hair-color'],
      fullName: hero.name,
      aliases: hero.biography.aliases,
      base: hero.biography['place-of-birth'],
    };

    return (
      <Card
        bg={alignment !== 'good' && 'dark'}
        text={alignment !== 'good' && 'white'}
        style=
        {{
          maxWidth: '1000px',
          margin: '30px auto',
        }}
        >
        <Card.Body>
          <Row>
            <Col md={6}>
              <CardImg
                className='image-cover'
                variant='top'
                src={hero.image.url}
                alt='Card image'
                style={{ objectFit: 'cover' }}
              />
            </Col>
            <Col className='centered-content p-2'>
              <Card.Title className='fs-2 fw-bold text-center font-monospace'>
                {hero.name}
              </Card.Title>

              <Row>
                <Col>
                  <Card.Text className='text-end font-monospace'>
                    Weight
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text className='font-monospace'>
                    {stats.weight}
                  </Card.Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Text className='text-end font-monospace'>
                    Height
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text className='font-monospace'>
                    {stats.height}
                  </Card.Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Text className='text-end font-monospace'>
                    Eye Color
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text className='font-monospace'>{stats.eye}</Card.Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Text className='text-end font-monospace'>
                    Hair Color
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text className='font-monospace'>{stats.hair}</Card.Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Text className='text-end font-monospace'>
                    Aliases
                  </Card.Text>
                </Col>
                <Col>
                  {stats.aliases.map((alias) => {
                    return (
                      <div key={alias} className='font-monospace'>
                        {alias}
                      </div>
                    );
                  })}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Text className='text-end font-monospace'>
                    Place of Birth
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text className='font-monospace'>{stats.base}</Card.Text>
                </Col>
              </Row>

              <Row>
                <Col className='text-end'>
                  <Button className='btn btn-light mt-2' onClick={() => history.goBack()}>
                    Back
                  </Button>
                </Col>
                <Col>
                  <Card.Link className='btn btn-light mt-2' href='#'>
                    Add +
                  </Card.Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  } else {
    return <div className='h100 fs-1'>Loading...</div>;
  }
};
