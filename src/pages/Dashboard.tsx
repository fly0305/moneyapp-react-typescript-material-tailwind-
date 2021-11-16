import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import AuthenticationButton from '../components/auth/AuthenticationButton';
import { Button } from '@mui/material';
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  let token = '';
  const { user, getAccessTokenSilently } = useAuth0();
  const getToken = async () => {
    const a = await getAccessTokenSilently();
    console.log(a);
    token = a;
    // token = jwt_decode(a, { header: true });
  };
  getToken();

  const copyToken = async () => {
    navigator.clipboard.writeText(`${token}`);
  };

  return (
    <>
      <h1>Dashboard page</h1>
      <h2>Welcome back, {user?.name}</h2>
      <h2>Email: {user?.email}</h2>
      <Button onClick={copyToken}>Copy Token</Button>
      <AuthenticationButton />
    </>
  );
};

export default Dashboard;
