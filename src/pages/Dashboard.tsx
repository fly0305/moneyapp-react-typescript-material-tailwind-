import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import AuthenticationButton from '../components/auth/AuthenticationButton';

interface DashboardProps{};

const Dashboard: React.FC<DashboardProps> = () => {
    const { user } = useAuth0();
    return (
        <>
            <h1>Dashboard page</h1>
            <h2>Welcome back {user?.email}</h2>
            <AuthenticationButton />
        </>
    )
}

export default Dashboard;