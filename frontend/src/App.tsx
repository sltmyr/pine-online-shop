import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyles, theme } from './global_styles';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CoatDetails from './pages/CoatDetails';
import Footer from './components/Footer';

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

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  const [language, setLanguage] = useState(Language.english);

  return (
    <ThemeProvider theme={theme}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <GlobalStyles />
        <Router>
          <Header />
          <Switch>
            <Route path='/about' component={About}></Route>
            <Route path='/contact' component={Contact}></Route>
            <Route path='/coat/:model' component={CoatDetails}></Route>
            <Route path='/' component={Home}></Route>
          </Switch>
          <Footer />
        </Router>
      </LanguageContext.Provider>
    </ThemeProvider>
  );
}

export default App;
