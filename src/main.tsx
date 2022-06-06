import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Amplify } from '@aws-amplify/core';
// @ts-ignore
import config from './aws-exports';
import './index.css';
import 'antd/dist/antd.css';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(config);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
