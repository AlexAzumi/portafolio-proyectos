import React from 'react';
// Components
import Navbar from '../../components/Navbar';
import ChangeLanguageButton from '../../components/ChangeLanguageButton';
// Views
import Home from '../Home';
import MyProjects from '../MyProjects';

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

      <ChangeLanguageButton />
    </>
  );
};

export default MainLayout;
