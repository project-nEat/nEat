import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/styles.css';

const root = createRoot(document.getElementById('app'));

root.render(<App />);