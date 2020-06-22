import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

/**
 * Navbar component
 */
const CustomNavbar = () => {
  return (
    <Navbar className='shadow p-3 p-md-2' bg='dark' variant='dark' expand='md'>
      <Navbar.Brand></Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse>
        <Nav className='ml-auto'>
          <Nav.Link
            className='rounded-pill px-3 mx-0 mx-md-1 fade-top-0 text-center mb-2 mb-md-0'
            href='#home'
          >
            Inicio
          </Nav.Link>
          <Nav.Link
            className='rounded-pill px-3 mx-0 mx-md-1 fade-top-1 text-center mb-2 mb-md-0'
            href='#about'
          >
            Sobre mí
          </Nav.Link>
          <Nav.Link
            className='rounded-pill px-3 mx-0 mx-md-1 fade-top-2 text-center mb-2 mb-md-0'
            href='#projects'
          >
            Proyectos
          </Nav.Link>
          <Nav.Link
            className='rounded-pill px-3 mx-0 mx-md-1 fade-top-3 text-center mb-2 mb-md-0'
            href='#repositories'
          >
            Repositorios
          </Nav.Link>
          <Nav.Link
            className='rounded-pill px-3 mx-0 mx-md-1 fade-top-4 text-center mb-2 mb-md-0'
            href='#contact'
          >
            Contacto
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
