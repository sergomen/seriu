import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ReactGA from "react-ga4";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactGA.initialize("G-N7D1EMG1EJ");

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});