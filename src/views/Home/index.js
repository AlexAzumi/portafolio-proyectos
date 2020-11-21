import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';

/**
 * Home view that will display my welcome message with a background video
 * @param {object} props - Component props
 */
const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id='home' className='avoid-navbar' />
      <div className='home'>
        <div className='inner-container'>
          <ScrollAnimation
            animateIn='animate__rotateInDownLeft'
            animateOnce={true}
            delay={800}
            offset={0}
          >
            <h2 className='subtitle'>{t('home.title')}</h2>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn='animate__rotateInUpRight'
            animateOnce={true}
            delay={700}
            offset={0}
          >
            <h1 className='title'>Alejandro Suárez</h1>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn='animate__fadeIn'
            animateOnce={true}
            delay={1500}
            offset={0}
          >
            <p className='degree'>{t('home.occupation')}</p>
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
};

export default Home;
