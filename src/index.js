import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Root from './components/Root';
import App from './components/App';

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <Root />
    {/* <NavigationBar /> */}
  </React.StrictMode>
);
