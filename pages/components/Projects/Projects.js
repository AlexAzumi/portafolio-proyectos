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
    <ScrollAnimation animateIn='fade-in-left' animateOnce={true}>
      <div id='projects' className='pb-5'>
        <h2 className='text-center text-primary mb-4 title'>Proyectos</h2>
        {/* Projects */}
        <Row>
          {projects.map((item, index) => {
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
                    <a
                      className='url text-info rounded-pill px-lg-3 py-lg-1'
                      href={item.url}
                    >
                      {item.url}
                    </a>
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