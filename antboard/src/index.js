import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import './index.css'; 

// Create root using React 18 API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
