import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BootstrapNavbar bg='dark' variant='dark' expand='md'>
      <BootstrapNavbar.Brand>Azumi's vault</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls='basic-navbar-nav' />
      <BootstrapNavbar.Collapse id='basic-navbar-nav'>
        <Nav className='mx-auto'>
          <Nav.Link className='delay-0'>
            Inicio <hr />
          </Nav.Link>
          <Nav.Link className='delay-1'>
            Mis proyectos <hr />
          </Nav.Link>
          <Nav.Link className='delay-2'>
            Sobre mí <hr />
          </Nav.Link>
          <Nav.Link className='delay-3'>
            Contacto <hr />
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
