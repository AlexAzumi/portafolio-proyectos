import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
// Images
import profilePicture from '../../assets/profile-picture.jpg';

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
        <ScrollAnimation animateOnce={true} animateIn='enter-about'>
          <Container fluid>
            <div className='row about-container'>
              <div className='avatar-container col-12 col-md-6'>
                <img
                  className='avatar'
                  src={profilePicture}
                  alt='Foto de Alejandro Suárez'
                />
              </div>
              <div className='information-container col-12 col-md-6 pt-5 pt-md-0'>
                <p className='title'>{t('about.title')}</p>
                <p className='description'>{t('about.description')}</p>
              </div>
            </div>
          </Container>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default About;
