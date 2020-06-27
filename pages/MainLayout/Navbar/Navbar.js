import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

/**
 * Navbar component
 */
const CustomNavbar = () => {
  // State
  const [isSticky, setIsSticky] = React.useState(false);

  /**
   * Go to element with smooth animation
   * @param {Event} event - onClick event
   * @param {string} id - Element ID
   */
  const goToElement = (event, id) => {
    // Prevent default
    event.preventDefault();
    // Get element
    const element = document.getElementById(id);
    // Check element
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  /**
   * Hook that returns the previous and current position of the window
   */
  useScrollPosition(({ prevPos, currPos }) => {
    // Check if the user scroll enough to stick the navbar to the top
    if (prevPos.y > currPos.y && currPos.y < -80) {
      setIsSticky(true);
    } else if (prevPos.y < currPos.y && currPos.y > -80) {
      setIsSticky(false);
    }
  });

  return (
    <Navbar
      className={`p-3 p-md-2 ${
        isSticky ? 'shadow sticky-top' : 'bg-transparent'
      }`}
      bg='dark'
      variant='dark'
      expand='md'
    >
      <Navbar.Brand></Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse>
        <Nav className='ml-auto'>
          <Nav.Link
            className='rounded-pill px-3 mx-0 mx-md-1 fade-top-0 text-center mb-2 mb-md-0'
            href='#home'
            onClick={event => goToElement(event, 'home')}
          >
            Inicio
          </Nav.Link>
          <Nav.Link
            className='rounded-pill px-3 mx-0 mx-md-1 fade-top-1 text-center mb-2 mb-md-0'
            href='#about'
            onClick={event => goToElement(event, 'about')}
          >
            Sobre mí
          </Nav.Link>
          <Nav.Link
            className='rounded-pill px-3 mx-0 mx-md-1 fade-top-2 text-center mb-2 mb-md-0'
            href='#projects'
            onClick={event => goToElement(event, 'projects')}
          >
            Proyectos
          </Nav.Link>
          <Nav.Link
            className='rounded-pill px-3 mx-0 mx-md-1 fade-top-3 text-center mb-2 mb-md-0'
            href='#repositories'
            onClick={event => goToElement(event, 'repositories')}
          >
            Repositorios
          </Nav.Link>
          <Nav.Link
            className='rounded-pill px-3 mx-0 mx-md-1 fade-top-4 text-center mb-2 mb-md-0'
            href='#contact'
            onClick={event => goToElement(event, 'contact')}
          >
            Contacto
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
