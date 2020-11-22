import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDownload, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
// Components
import MainLayout from './views/MainLayout';
// Styles
import './App.scss';
// Internacionalization
import './i18n';

library.add(faDownload, faGlobeAmericas);

const App = () => {
  return <MainLayout />;
};

export default App;
