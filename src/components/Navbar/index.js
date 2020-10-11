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
   * @param {string} elementID - ID of the element that we are going to navigate
   */
  const goToElement = (elementID) => {
    const element = document.getElementById(elementID);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Collapse navbar
      setCollapsed(true);
    }
  };

  return (
    <BootstrapNavbar bg='dark' variant='dark' expand='md' expanded={!collapsed}>
      <BootstrapNavbar.Brand>Azumi's vault</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle
        aria-controls='basic-navbar-nav'
        onClick={() => setCollapsed(!collapsed)}
      />
      <BootstrapNavbar.Collapse id='basic-navbar-nav'>
        <Nav className='mx-auto'>
          <Nav.Link className='delay-0' onClick={() => goToElement('home')}>
            {t('navbar.home')} <hr />
          </Nav.Link>
          <Nav.Link className='delay-1' onClick={() => goToElement('projects')}>
            {t('navbar.myProjects')} <hr />
          </Nav.Link>
          <Nav.Link className='delay-2' onClick={() => goToElement('about')}>
            {t('navbar.aboutMe')} <hr />
          </Nav.Link>
          <Nav.Link className='delay-3' onClick={() => goToElement('contact')}>
            {t('navbar.contact')} <hr />
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
