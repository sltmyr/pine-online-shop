import React from "react";
import LanguageContextProvider from "./src/context/languageContext";
import InitialLoadContextProvider from "./src/context/initialLoadContext";
import "./src/styles/global.css";
import "./src/fonts/domaine-sans-fine-web-thin.woff";
import "./src/fonts/Montserrat-Thin.ttf";

export const wrapRootElement = ({ element }) => (
  <LanguageContextProvider>
    <InitialLoadContextProvider>{element}</InitialLoadContextProvider>
  </LanguageContextProvider>
);
