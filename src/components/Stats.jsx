import React from 'react';
import { Col, Container, Table } from 'react-bootstrap';

export const Stats = () => {
  const statsArr1 = [
    { stat: 'Intelligence', value: 85 },
    { stat: 'Strength', value: 85 },
    { stat: 'Power', value: 85 },
  ];
  const statsArr2 = [
    { stat: 'Durability', value: 85 },
    { stat: 'Speed', value: 85 },
    { stat: 'Combat', value: 85 },
  ];

  return (
    <Container className='mt-2 mx-auto d-flex flex-wrap'>
      <Col xs={12} md={6}>
        <Table  size='sm'>
          <thead>
            <tr>
              {statsArr1.map((stat) => (
                <th scope='col' className='text-center' key={stat.stat}>
                  {stat.stat}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {statsArr1.map((stat) => (
                <td scope='col' className='text-center' key={stat.stat}>
                  {stat.value}
                </td>
              ))}
            </tr>
          </tbody>
        </Table>
      </Col>
      <Col xs={12} md={6}>
        <Table  size='sm'>
          <thead>
            <tr>
              {statsArr2.map((stat) => (
                <th scope='col' className='text-center' key={stat.stat}>
                  {stat.stat}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {statsArr2.map((stat) => (
                <td scope='col' className='text-center' key={stat.stat}>
                  {stat.value}
                </td>
              ))}
            </tr>
          </tbody>
        </Table>
      </Col>
    </Container>
  );
};
