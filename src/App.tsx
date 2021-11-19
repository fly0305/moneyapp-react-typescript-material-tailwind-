import React from 'react';
import './App.css';
import AuthenticationButton from './components/auth/AuthenticationButton';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from 'pages/Dashboard';

const App: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  return <>{!isAuthenticated ? <AuthenticationButton /> : <Dashboard />}</>;
};

export default App;
