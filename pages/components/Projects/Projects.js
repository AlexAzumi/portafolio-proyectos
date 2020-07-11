import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Col } from 'react-bootstrap';
// Data
import projects from '../../../data/projects';

/**
 * Projects component
 * @param {object} props - Component props
 */
const Projects = () => {
  return (
    <ScrollAnimation
      className='position-relative'
      animateIn='fade-in-left'
      animateOnce={true}
    >
      <div className='section-header' id='projects' />
      <div className='pb-5'>
        <h2 className='text-center text-primary mb-1 title'>Proyectos</h2>
        {/* Description */}
        <p className='text-center mb-3'>
          Proyectos más importantes en los que he trabajado
        </p>
        {/* Projects */}
        <Row>
          {projects.reverse().map((item, index) => {
            return (
              <Col key={`project-${index}`} lg={6} className='mb-3'>
                <div className='custom-card rounded p-2 p-lg-3'>
                  {/* Title */}
                  <p className='title text-center text-info mb-2'>
                    {item.title}
                  </p>
                  <div className='position-relative'>
                    {/* Image */}
                    <img className='img-fluid mb-1' src={item.imageURL} />
                    {/* Link */}
                    {item.url ? (
                      <a
                        className='url text-info rounded-pill px-lg-3 py-lg-1'
                        href={item.url}
                      >
                        {item.url}
                      </a>
                    ) : null}
                  </div>
                  {/* Description */}
                  <p className='description text-center'>{item.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </ScrollAnimation>
  );
};

export default Projects;
