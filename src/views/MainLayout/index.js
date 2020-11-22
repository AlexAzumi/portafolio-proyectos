import React from 'react';
// Components
import Navbar from '../../components/Navbar';
import ChangeLanguageButton from '../../components/ChangeLanguageButton';
// Views
import Home from '../Home';
import MyProjects from '../MyProjects';
import About from '../About';

/**
 * Component that wraps the entire app
 * @param {object} props - Component props
 */
const MainLayout = () => {
  return (
    <>
      <Navbar />
      {/* Views */}
      <Home />
      <MyProjects />
      <About />

      <ChangeLanguageButton />
    </>
  );
};

export default MainLayout;
