import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';




ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
       <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
