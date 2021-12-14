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
import jwt from 'jwt-decode';
import { DecodedJwt } from 'auth0/Auth0.dto';
import Forbidden from 'pages/Forbidden';
dotenv.config({ path: __dirname + '.env' });

const App: React.FC = () => {
  const { isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();
  const [token, setToken] = useState<string>('');
  const [permissions, setPermissions] = useState<string[] | undefined>(['']);

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
  const user: DecodedJwt = jwt(token);

  if (isAuthenticated) {
    console.log(`user authenticated, token => ${token}`);
    setPermissions(user?.permissions);
    console.log(permissions?.length);
    if (permissions?.length === 0) return <Forbidden />;
  }

  switch (isAuthenticated) {
    case false:
      return <Login />;
    case true:
      if (isLoading) return <Loading />;
      else
        return (
          <ApolloProvider client={client}>
            <Dashboard />
          </ApolloProvider>
        );
  }
};

export default App;
