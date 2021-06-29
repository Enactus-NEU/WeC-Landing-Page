import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Loading from "./components/Loading";
import { HelmetProvider } from 'react-helmet-async';
import TagManager from 'react-gtm-module'

const AppWithLoading = Loading(App)

// google tag manager ---> start
 
const tagManagerArgs = {
    gtmId: 'GTM-NPNH736'
}
 
TagManager.initialize(tagManagerArgs)
// google tag manager ---> end


ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <AppWithLoading />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
