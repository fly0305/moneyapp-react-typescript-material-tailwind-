import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './components/auth/Auth0Provider';
import { client } from './api/ApolloClient';
import { ApolloProvider } from '@apollo/client';

ReactDOM.render(
  <React.Fragment>
    <Router>
      <Auth0ProviderWithHistory>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Auth0ProviderWithHistory>
    </Router>
  </React.Fragment>,
  document.getElementById('root'),
);
