import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

const httpLink = new HttpLink({
  uri: process.env.API_URL,
  headers: {
    authorization: `Bearer `,
  },
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});
