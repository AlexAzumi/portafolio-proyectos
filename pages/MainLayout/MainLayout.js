import React from 'react';
import { Container } from 'react-bootstrap';
// Components
import Navbar from './Navbar/Navbar';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';

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
        {/* Personal projects components */}
        <Projects />
      </Container>
    </>
  );
};

export default MainLayout;
