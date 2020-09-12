import React, { useEffect } from 'react';
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

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
