import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <h1 className='main-title'>{t('navbar.myProjects')}</h1>
        {projects.map((project) => {
          return (
            <ScrollAnimation
              key={project.key}
              animateOnce={true}
              animateIn={project.entryAnimation}
            >
              <div
                className='project-card'
                theme={project.theme}
                position={project.position}
              >
                <Carousel className='screenshots-container' indicators={false}>
                  {project.screenshots.map((screenshot) => {
                    return (
                      <Carousel.Item
                        key={screenshot.key}
                        className='screenshot'
                      >
                        <div
                          className='image'
                          style={{
                            backgroundImage: `url(${screenshot.src})`,
                          }}
                        />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
                <div className='information'>
                  <h3 className='title'>{t(project.type)}</h3>
                  <h2 className='subtitle'>{t(project.title)}</h2>
                  <p className='description'>{t(project.description)}</p>
                  {/* Extra button */}
                  {project.button ? (
                    <a
                      className='btn btn-primary extra-button'
                      href={project.button.href}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <FontAwesomeIcon
                        className='icon-button'
                        icon={project.button.icon}
                      />
                      {t(project.button.text)}
                    </a>
                  ) : null}
                </div>
              </div>
            </ScrollAnimation>
          );
        })}
      </div>
    </>
  );
};

export default MyProjects;
