import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'

export const NavbarSearch = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Search</Navbar.Brand>
  <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Search</Nav.Link>
      
    </Nav>
    <Nav>
      <Navbar.Text>
        Signed in as: challenge@alkemy.org - <a href="#login "> go out</a>
      </Navbar.Text>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    )
}
