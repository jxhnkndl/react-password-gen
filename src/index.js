import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// dark/light mode context
import { ThemeProvider } from './context/ThemeContext';

// capture app container and create root component
const container = document.getElementById('root');
const root = createRoot(container);

// render app
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
