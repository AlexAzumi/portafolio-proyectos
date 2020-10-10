import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BootstrapNavbar
      className='sticky-top'
      bg='dark'
      variant='dark'
      expand='md'
    >
      <BootstrapNavbar.Brand>Azumi's vault</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls='basic-navbar-nav' />
      <BootstrapNavbar.Collapse id='basic-navbar-nav'>
        <Nav className='mx-auto'>
          <Nav.Link>
            Inicio <hr />
          </Nav.Link>
          <Nav.Link>
            Mis proyectos <hr />
          </Nav.Link>
          <Nav.Link>
            Sobre mí <hr />
          </Nav.Link>
          <Nav.Link>
            Contacto <hr />
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
