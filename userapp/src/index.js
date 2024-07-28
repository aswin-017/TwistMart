// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Check the saved theme from local storage
const savedTheme = localStorage.getItem('theme') || 'light';

// Apply the saved theme to the body
document.body.classList.add(savedTheme);

root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
