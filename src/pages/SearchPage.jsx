import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Container, Form, FormControl } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { NavBarCustom } from '../components/NavBar';
import { SearchForm } from '../components/SearchForm';
import { SearchGridCard } from '../components/SearchGridCard';
import { fetchHeroesByName } from '../helpers/fetchAuth';
import { useForm } from '../hooks/useForm';

export const SearchPage = () => {
  const { term: termParam } = useParams();
  const [heroes, setHeroes] = useState(null);
  const [values, handleInputChange] = useForm({ term: termParam || '' });
  const mountedRef = useRef(true);
  const history = useHistory();

  const execute = useCallback(() => {
    fetchHeroesByName(termParam).then((heroesRes) => {
      let heroesFetched = heroesRes.data.results;
      setHeroes(heroesRes && heroesFetched);
    });
  }, []);

  useEffect(() => {
    execute();
  }, [termParam]);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  console.log(termParam);

  console.log('me redibujo');

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (values.term.trim().length > 0) {
      history.push(`/search/${values.term}`);
    }
  };

  return (
    <>
      <NavBarCustom />
      <Container className='mt-3'>
        <SearchForm
          change={handleInputChange}
          value={values.term}
          submit={handleSubmit}
        />
        {heroes !== null && <SearchGridCard heroes={heroes} />}
      </Container>
    </>
  );
};

/* 

const { term: termParam } = useParams();

  const history = useHistory();

  const [values, handleInputChange] = useForm({ term: '' });

  const [heroes, setHeroes] = useState(null);

  console.log('me redibujo');

  if (termParam) {
    fetchHeroesByName(termParam).then((heroesRes) => {
      let heroesFetched = heroesRes.data.results;
      if (heroesRes) {
        setHeroes(heroesRes && heroesFetched);
      }
    });
  }

  useEffect(() => {
    return () => {};
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    debugger;
    history.push(`/search/${values.term}`);
    debugger;
  };

  return (
    <>
      <NavBarCustom />
      <Container className='mt-3'>
        <SearchForm
          change={handleInputChange}
          value={values.term}
          submit={handleSubmit}
        />
        {heroes !== null && <SearchGridCard heroes={heroes} />}
      </Container>
    </>
  );
};



*/
