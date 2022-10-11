import React, { useCallback, useContext } from "react";
import translations from "../public/translations.json";

const LangContext = React.createContext();

export const LangContextProvider = ({ currentLang, children }) => {
  const t = useCallback(
    (key) => {
      return translations?.[currentLang]?.[key] || key;
    },
    [currentLang]
  );

  return <LangContext.Provider value={t}>{children}</LangContext.Provider>;
};

const useTranslation = () => {
  let Context = useContext(LangContext);
  if (!Context) throw new Error("useTranslation must be used within a TranslationProvider");

  return Context;
};

export default useTranslation;
