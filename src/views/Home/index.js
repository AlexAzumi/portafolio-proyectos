import React from 'react';

/**
 * Home view that will display my welcome message with a background video
 * @param {object} props - Component props
 */
const Home = () => {
  return (
    <div className='home'>
      <div className='inner-container'>
        <h2 className='subtitle'>Hola, mi nombre</h2>
        <h1 className='title'>Alejandro Suárez</h1>
        <p className='degree'>Tecnólogo en desarrollo de software</p>
      </div>
    </div>
  );
};

export default Home;
