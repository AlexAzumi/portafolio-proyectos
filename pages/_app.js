import React from 'react';
import Head from 'next/head';
// Components
import MainLayout from './MainLayout/MainLayout';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './_app.scss';

/**
 * Main app component
 * @param {object} props - Component props
 */
const App = () => {
  return (
    <>
      {/* Head tag */}
      <Head>
        <title>Alejandro Suárez | Portafolio personal</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <MainLayout />
    </>
  );
};

export default App;
