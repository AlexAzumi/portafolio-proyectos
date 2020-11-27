import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

/**
 * Main navbar component
 * @param {object} props - Component props
 */
const Navbar = () => {
  // i18n
  const { t } = useTranslation();
  // State
  const [collapsed, setCollapsed] = React.useState(true);

  /**
   * Goes to the selected element
   * @param {Event} event - onClick event
   * @param {string} elementID - ID of the element that we are going to navigate
   */
  const goToElement = (event, elementID) => {
    event.preventDefault();

    const element = document.getElementById(elementID);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Collapse navbar
      setCollapsed(true);
    }
  };

  return (
    <BootstrapNavbar bg='dark' variant='dark' expand='md' expanded={!collapsed}>
      <BootstrapNavbar.Brand className='brand'>
        Azumi's vault
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle
        aria-controls='basic-navbar-nav'
        onClick={() => setCollapsed(!collapsed)}
      />
      <BootstrapNavbar.Collapse id='basic-navbar-nav'>
        <Nav className='mx-auto'>
          <Nav.Link
            href='#home'
            className='delay-0'
            onClick={(event) => goToElement(event, 'home')}
          >
            {t('navbar.home')} <hr />
          </Nav.Link>
          <Nav.Link
            href='#projects'
            className='delay-1'
            onClick={(event) => goToElement(event, 'projects')}
          >
            {t('navbar.myProjects')} <hr />
          </Nav.Link>
          <Nav.Link
            href='#about'
            className='delay-2'
            onClick={(event) => goToElement(event, 'about')}
          >
            {t('navbar.aboutMe')} <hr />
          </Nav.Link>
          <Nav.Link
            href='#experience'
            className='delay-3'
            onClick={(event) => goToElement(event, 'experience')}
          >
            {t('navbar.experience')} <hr />
          </Nav.Link>
          <Nav.Link
            href='#contact'
            className='delay-4'
            onClick={(event) => goToElement(event, 'contact')}
          >
            {t('navbar.contact')} <hr />
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
