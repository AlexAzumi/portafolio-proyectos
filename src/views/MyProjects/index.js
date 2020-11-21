import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
// Data
import projects from '../../data/projects.json';

/**
 * A list of the most important projects that I have worked on
 * @param {object} props - Component props
 */
const MyProjects = () => {
  // i18n
  const { t } = useTranslation();

  return (
    <>
      <div id='projects' className='avoid-navbar' />
      <div className='projects'>
        {projects.map((project) => {
          return (
            <div
              key={project.key}
              className='project-card'
              theme={project.theme}
              position={project.position}
            >
              <Carousel className='screenshots-container'>
                {project.screenshots.map((screenshot) => {
                  return (
                    <Carousel.Item key={screenshot.key} className='screenshot'>
                      <img
                        className='img-fluid'
                        src={screenshot.src}
                        alt={screenshot.alt}
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
              <div className='information'>
                <h3 className='title'>{t(project.type)}</h3>
                <h2 className='subtitle'>{t(project.title)}</h2>
                <p className='description'>{t(project.description)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyProjects;
