import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

/**
 * Home view that will display my welcome message with a background video
 * @param {object} props - Component props
 */
const Home = () => {
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
            <h2 className='subtitle'>Hola, mi nombre</h2>
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
            <p className='degree'>Tecnólogo en desarrollo de software</p>
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
};

export default Home;
