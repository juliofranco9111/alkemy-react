import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const NavBarCustom = () => {

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(startLogout());
  }

  return(
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">SuperHero</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link className="nav-link" to='/home'>Home</Link>
      <Link className="nav-link" to='/search'>Search</Link>
      
    </Nav>
    <Nav>
      <Navbar.Text className="d-flex align-items-center">
        Signed in as: challenge@alkemy.org  <Button onClick={handleLogOut} className="mx-2"variant="outline-light">Log Out</Button>
      </Navbar.Text>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

  )
};
