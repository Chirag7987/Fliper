import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'; // Optional, can be customized
import App from './App'; // Import the main App component
// import reportWebVitals from './reportWebVitals'; // Optional

// Render the App component into the root div in the HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: performance measuring
// reportWebVitals();
