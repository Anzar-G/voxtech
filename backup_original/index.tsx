import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './src/i18n';
import './index.css'; // Ensure CSS is imported if not already, though likely in App or index.html logic, but here standardizing.
// Actually just importing i18n is enough to init it.


const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <App />
    </React.Suspense>
  </React.StrictMode>
);
