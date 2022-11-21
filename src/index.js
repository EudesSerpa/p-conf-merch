import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { AppProvider } from './context/AppContext';
import { router } from './router';
import './index.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <PayPalScriptProvider
        options={{ 'client-id': process.env.PAYPAL_CLIENT_ID }}
      >
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </AppProvider>
  </React.StrictMode>
);
