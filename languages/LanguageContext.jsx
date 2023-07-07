import React, {createContext, useState, useContext} from 'react';
import {useTranslation} from 'react-i18next';

const LanguageContext = createContext();

const LanguageProvider = ({children}) => {
  const {t, i18n} = useTranslation();

  const [currentLanguage, setLanguage] = useState('fr');

  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };

  return (
    <LanguageContext.Provider value={{t, currentLanguage, changeLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => useContext(LanguageContext);

export {LanguageProvider, useLanguage};
