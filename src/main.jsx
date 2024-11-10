import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ReactGA from "react-ga4";
import GA4React from "ga-4-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// ReactGA.initialize("G-N7D1EMG1EJ");

// ReactGA.send({
//   hitType: "pageview",
//   page: window.location.pathname,
// });

try {
  setTimeout(_ => {
    const ga4react = new GA4React("G-N7D1EMG1EJ");
    ga4react.initialize().catch(err => console.error(err));
  }, 4000);
} catch (err) {
      console.error(err);
}