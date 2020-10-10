import React from 'react';
// Components
import Navbar from '../../components/Navbar';
// Views
import Home from '../Home';

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
    </>
  );
};

export default MainLayout;
