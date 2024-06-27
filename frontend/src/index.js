// Assurez-vous que vous importez createRoot depuis react-dom/client
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Assurez-vous d'utiliser createRoot correctement
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
