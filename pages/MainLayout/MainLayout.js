import React from 'react';
import { Container } from 'react-bootstrap';
// Components
import Navbar from './Navbar/Navbar';
import Home from '../components/Home/Home';
import About from '../components/About/About';

/**
 * Main layout component
 * @param {object} props - Component props
 */
const MainLayout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Main container */}
      <Container>
        {/* Home component */}
        <Home />
        {/* About component */}
        <About />
      </Container>
    </>
  );
};

export default MainLayout;
