import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

 import './about.css';
import './project.css';
import './header2.css';
import './responsive.css'

import App from './App';
import {AppProvider} from './controllers/context_api'
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />   
    </AppProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);
