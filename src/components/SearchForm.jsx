import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

export const SearchForm = ({ change, value, submit }) => {
  return (
    <Form onSubmit={submit} className='d-flex'>
      <FormControl
        onChange={change}
        name='term'
        type='search'
        value={value}
        placeholder='Search'
        className='me-2'
        aria-label='Search'
        autoFocus
      />
      <Button type='submit' variant='dark'>
        Search
      </Button>
    </Form>
  );
};
