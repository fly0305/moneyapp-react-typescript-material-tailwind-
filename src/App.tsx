import React, { useState } from 'react';
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
  from,
} from '@apollo/client';
// import { onError } from '@apollo/client/link/error';
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '.env' });

const App: React.FC = () => {
  const [token, setToken] = useState<string>('');
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const getToken = async () => {
    const tempToken = await getAccessTokenSilently();
    setToken(tempToken);
  };
  getToken();

  // const errorLink = onError(({ graphqlErrors, networkError }) => {
  //   if (graphqlErrors) {
  //     graphqlErrors.map(({ message, location, path }) => {
  //       alert(`Graphql error ${message}`);
  //     });
  //   }
  // });

  const link = from([
    // errorLink,
    new HttpLink({
      uri: process.env.API_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  ]);

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });

  return (
    <ApolloProvider client={client}>
      {!isAuthenticated ? <AuthenticationButton /> : <Dashboard />}
    </ApolloProvider>
  );
};

export default App;
