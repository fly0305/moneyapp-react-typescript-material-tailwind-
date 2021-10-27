import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './components/auth/Auth0Provider'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory prop={<App />} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

