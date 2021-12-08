import React from 'react';
import Home from './pages/Home';
import GlobalStyle from './components/GlobalStyles';
import Nav from './components/Nav';
import Contactus from './pages/Contactus';
import Ourwork from './pages/Ourwork';
import OurWorkDetails from './pages/OurWorkDetails';
import { Switch, Route, useLocation } from 'react-router-dom';
//animation 
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav/>
      <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/ourwork">
            <Ourwork/>
          </Route>
          <Route path="/ourwork/:id">
            <OurWorkDetails/>
          </Route>
          <Route exact path="/contactus">
            <Contactus/>
          </Route>
          </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
