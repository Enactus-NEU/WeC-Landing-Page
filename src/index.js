import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import { BrowserRouter as Router } from "react-router-dom";

import App from './App';

import reportWebVitals from './reportWebVitals';

import { HelmetProvider } from 'react-helmet-async';

import TagManager from 'react-gtm-module'


// google tag manager ---> start
 
const tagManagerArgs = {
    gtmId: 'GTM-NPNH736'
}
 
TagManager.initialize(tagManagerArgs)
// google tag manager ---> end


ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
    <Router>
      <App />
    </Router>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('wecollect-app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
