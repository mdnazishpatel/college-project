import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSearch } from '../Context/Searchcontext';

import totalschl from '../API/Mainschl'
import { Button, Card, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'



export default function Header() {

  const { searchTerm, setSearchTerm } = useSearch();

  



  return (

    <div>

      <Navbar expand="lg" className="bg-#686868">
        <Container fluid>
          <Navbar.Brand className="text-primary">Know Your Scheme</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to={'/'} className='text-white' active>Home</Nav.Link>
              <Nav.Link as={Link} to={'/total'} className='text-white'>Government startups</Nav.Link>
              <Nav.Link as={Link} to={'/schemes'} className='text-white'>Government schemes</Nav.Link>
              <Nav.Link as={Link} to={'/Schloarship'} className='text-white'>Government schloarships</Nav.Link>
              <Nav.Link as={Link} to={'/about-us'} className='text-white'>Aboutus</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" className='bg-primary'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </div>

  )
}
