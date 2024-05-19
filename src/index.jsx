import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import { MantineProvider } from '@mantine/core';
import App from './components/app';

const root = createRoot(document.getElementById('main'));
root.render(
  <MantineProvider>
    <App />
  </MantineProvider>,
);
