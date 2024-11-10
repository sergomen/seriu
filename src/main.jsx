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

try {
  setTimeout(_ => {
    // const ga4react = new ReactGA("G-N7D1EMG1EJ");
    ReactGA.initialize("G-N7D1EMG1EJ").catch(err => console.error(err));
  }, 4000);
} catch (err) {
      console.error(err);
}

// ReactGA.initialize("G-N7D1EMG1EJ");

// ReactGA.send({
//   hitType: "pageview",
//   page: window.location.pathname,
// });