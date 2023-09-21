import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import '../style.css';


const root = createRoot(document.getElementById('root'));

root.render(
      <App/>
)