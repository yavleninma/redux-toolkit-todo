import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';
import App from './App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <App />
    </Provider>
  </React.StrictMode>
);
