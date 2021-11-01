import React from 'react';
import { CardDetail } from '../components/CardDetail';
import { NavBarCustom } from '../components/NavBar';

export const DetailPage = () => {

  return (
    <>
      <NavBarCustom />
      <div className=''>
        <CardDetail />
      </div>
    </>
  );
};
