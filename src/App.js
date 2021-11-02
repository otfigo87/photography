import React from 'react';
import Home from './pages/Home';
import GlobalStyle from './components/GlobalStyles';
import Nav from './components/Nav';
import Contactus from './pages/Contactus';
import Ourwork from './pages/Ourwork';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav/>
      <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route exact path="/ourwork">
         <Ourwork/>
       </Route>
       <Route exact path="/contactus">
         <Contactus/>
       </Route>
      </Switch>
    </div>
  );
}

export default App;
