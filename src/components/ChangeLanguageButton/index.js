import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

/**
 * Button that changes the language of the page
 * @param {object} props - Component props
 */
const ChangeLanguageButton = () => {
  const { i18n } = useTranslation();

  /**
   * Handles the change of language
   * @param {string} language - Language string
   */
  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className='floating-button'>
      <DropdownButton title={i18n.language.toUpperCase()}>
        <Dropdown.Item onClick={() => handleChangeLanguage('es')}>
          ES | Español
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleChangeLanguage('en')}>
          EN | English
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default ChangeLanguageButton;
