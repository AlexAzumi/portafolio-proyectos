import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * View with information about me
 * @param {object} props - Component props
 */
const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id='about' className='avoid-navbar' />
      <div className='about'>
        <h1 className='main-title'>{t('navbar.aboutMe')}</h1>
      </div>
    </>
  );
};

export default About;
