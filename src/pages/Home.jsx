import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomTeam } from '../actions/team';
import { GridCardsHome } from '../components/GridCardsHome';
import { NavBarCustom } from '../components/NavBar';
import { SearchForm } from '../components/SearchForm';
import { Stats } from '../components/Stats';

export const Home = () => {
  const dispatch = useDispatch();
  dispatch(getRandomTeam());
  return (
    <>
      <NavBarCustom />
      <Stats />
      <GridCardsHome />
    </>
  );
};
