import React, { useState, useEffect } from "react";

export enum Language {
  english,
  german,
}

export const LanguageContext = React.createContext<{
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}>({
  language: Language.english,
  setLanguage: () => {},
});

const LanguageContextProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState(Language.english);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
