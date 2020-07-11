import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
// Places that I work/worked
import experience from '../../../data/experience';

/**
 * Jobs component
 * @param {object} props - Component props
 */
const Jobs = () => {
  return (
    <ScrollAnimation
      className='position-relative'
      animateIn='animate__fadeIn'
      animateOnce={true}
    >
      <div className='section-header' id='jobs' />
      <div className='pb-5'>
        <h2 className='text-center text-primary mb-1 title'>Experiencia</h2>
        {/* Description */}
        <p className='text-center mb-3'>Empresas para las que he trabajado</p>
        {/* Places */}
        <div className='places d-flex w-100 justify-content-md-center align-items-center overflow-auto'>
          {experience.map(item => {
            return (
              <img
                key={item.alt}
                className='places-logo mr-4'
                alt={item.alt}
                src={item.image}
                height={80}
              />
            );
          })}
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default Jobs;
