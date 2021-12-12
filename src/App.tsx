import React from 'react';
import './App.css';
import AuthenticationButton from './components/auth/AuthenticationButton';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from 'pages/Dashboard';
import 'tailwindcss/tailwind.css';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '.env' });

const App: React.FC = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const client = new ApolloClient({
    link: new HttpLink({
      uri: process.env.API_URL,
      headers: {
        Authorization: `Bearer ${getAccessTokenSilently()}`,
      },
    }),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      {!isAuthenticated ? <AuthenticationButton /> : <Dashboard />}
    </ApolloProvider>
  );
};

export default App;
