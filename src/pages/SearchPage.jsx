import React from 'react';
import { Button, Container, Form, FormControl } from 'react-bootstrap';
import { GridCardsHome } from '../components/GridCardsHome';
import { NavBarCustom } from '../components/NavBar';

export const SearchPage = () => {
  return (
    <>
      <NavBarCustom/>
      <Container className='mt-3'>
        <Form className='d-flex'>
          <FormControl
            type='search'
            placeholder='Search'
            className='me-2'
            aria-label='Search'
            autoFocus
          />
          <Button variant='primary'>Search</Button>
        </Form>
        <GridCardsHome />  
      </Container>
    </>
  );
};
