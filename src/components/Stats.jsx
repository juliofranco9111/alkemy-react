import React from 'react';
import { Col, Container, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const Stats = () => {
  const { sumStats } = useSelector((state) => state.team);

  if (sumStats) {
    const statsArr1 = [
      { stat: 'Intelligence', value: sumStats.intelligence || 0 },
      { stat: 'Strength', value: sumStats.strength || 0 },
      { stat: 'Power', value: sumStats.power || 0 },
      { stat: 'Durability', value: sumStats.durability || 0 },
      { stat: 'Speed', value: sumStats.speed || 0 },
      { stat: 'Combat', value: sumStats.combat || 0 },
    ];

    const sortArray = (arr) =>{
      return arr.sort((a, b) => {
        return b.value - a.value;
      });
    }

    return (
      <Container className='mt-2 mx-auto'>
        <Table size='xs'  responsive="xl">
          <thead>
            <tr>
              {sortArray(statsArr1).map((stat) => (
                <th scope='col' className='text-center' key={stat.stat}>
                  {stat.stat}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {sortArray(statsArr1).map((stat) => (
                <td scope='col' className='text-center' key={stat.stat}>
                  {stat.value}
                </td>
              ))}
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  } else {
    return null;
  }
};
