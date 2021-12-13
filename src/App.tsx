import React, { useEffect, useState } from 'react';
import './App.css';
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
import Login from 'pages/Login';
import Loading from 'pages/Loading';
dotenv.config({ path: __dirname + '.env' });

const App: React.FC = () => {
  const { isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const getToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        setToken(accessToken);
      } catch (e) {
        console.log(e);
      }
    };
    getToken();
  }, [getAccessTokenSilently, token]);

  const client = new ApolloClient({
    link: new HttpLink({
      uri: process.env.REACT_APP_API_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    cache: new InMemoryCache(),
  });

  if (isLoading) return <Loading />;

  return (
    <ApolloProvider client={client}>
      {!isAuthenticated ? <Login /> : <Dashboard />}
    </ApolloProvider>
  );
};

export default App;
