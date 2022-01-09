import React, { useEffect, useState } from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from 'pages/Dashboard';
import 'tailwindcss/tailwind.css';
import { ApolloProvider, ApolloClient, HttpLink } from '@apollo/client';
import * as dotenv from 'dotenv';
import Login from 'pages/Login';
import Loading from 'pages/Loading';
import jwt from 'jwt-decode';
import Forbidden from 'pages/Forbidden';
import { Cache } from './graphql/Cache';
import { DecodedJwt } from 'dto/Auth0.dto';
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
    cache: Cache,
  });

  if (!isAuthenticated) return <Login />;
  else if (isLoading) return <Loading />;
  else if (token !== '') {
    const decodedUser: DecodedJwt = jwt(token);
    if (decodedUser.permissions?.length === 0) return <Forbidden />;
  }
  return (
    <ApolloProvider client={client}>
      <Dashboard />
    </ApolloProvider>
  );
};

export default App;
