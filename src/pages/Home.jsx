import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { GridCardsHome } from '../components/GridCardsHome';
import { NavBarCustom } from '../components/NavBar';
import { Stats } from '../components/Stats';

export const Home = () => {
  return (
    <>
      <NavBarCustom />
     

      <Stats />
      <GridCardsHome />
    </>
  );
};
