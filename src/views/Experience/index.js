import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Data
import experienceData from '../../data/experience';

/**
 *
 * @param {object} props - Component props
 */
const Experience = () => {
  // i18n
  const { t } = useTranslation();

  return (
    <>
      <div id='experience' className='avoid-navbar' />
      <h1 className='main-title'>{t('navbar.experience')}</h1>
      {/* Content */}
      <ScrollAnimation animateOnce={true} animateIn='project-entry-left'>
        <Container className='experience' fluid>
          {experienceData.map((item) => {
            return (
              <div className='row corporation' key={item.key}>
                <div className='logo-container col-12 col-md-6'>
                  <img
                    className='logo'
                    src={item.logo}
                    alt={`${t(`experience.${item.key}.name`)} logo`}
                  />
                </div>
                <div className='col-12 col-md-6'>
                  <h3 className='title'>{t(`experience.${item.key}.name`)}</h3>
                  <div className='extra-information-container'>
                    <p className='dates'>
                      {t(`experience.${item.key}.charge`)}
                    </p>
                    <p className='dates'>{t(`experience.${item.key}.dates`)}</p>
                  </div>
                  <p className='description'>
                    {t(`experience.${item.key}.description`)}
                  </p>
                  {/* Website button */}
                  {item.website ? (
                    <div className='button-container'>
                      <a
                        className='btn btn-primary extra-button'
                        href={item.website}
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        <FontAwesomeIcon
                          className='icon-button'
                          icon='globe-americas'
                        />
                        {t('experience.goToWebsite')}
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </Container>
      </ScrollAnimation>
    </>
  );
};

export default Experience;
