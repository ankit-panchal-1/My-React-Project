import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ColorProvider } from './Componates/ColorContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ColorProvider>
      <App />
    </ColorProvider>
    </BrowserRouter>
  </React.StrictMode>
);

