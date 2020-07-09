import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
// Icons
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

/**
 * Home component
 * @param {object} props - Component props
 */
const Home = () => {
  /**
   * Go to element with smooth animation
   * @param {Event} event - onClick event
   * @param {string} id - Element ID
   */
  const goToElement = (event, id) => {
    // Prevent default
    event.preventDefault();
    // Get element
    const element = document.getElementById(id);
    // Check element
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <ScrollAnimation
      animateIn='animate__fadeInDown'
      animateOnce={true}
      delay={1200}
    >
      <div id='home' className='home'>
        <h2 className='display-4 text-primary'>Hola, mi nombre es</h2>
        <h1 className='display-2 text-light font-weight-bold name-title'>
          Alejandro Suárez
        </h1>
        <h5 className='text-info text-right'>
          Tecnólogo en Desarrollo de Software
        </h5>
        <div className='d-flex justify-content-center align-items-center mt-5'>
          <Button
            className='my-projects'
            variant='primary'
            size='lg'
            onClick={event => goToElement(event, 'projects')}
          >
            <FontAwesomeIcon className='down-icon mr-3' icon={faChevronDown} />
            Mis proyectos
            <FontAwesomeIcon className='down-icon ml-3' icon={faChevronDown} />
          </Button>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default Home;
