import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import AuthenticationButton from '../components/auth/AuthenticationButton';

interface DashboardProps{};

const Dashboard: React.FC<DashboardProps> = () => {
    let token = '';
    const { user, getAccessTokenSilently } = useAuth0();
    const getToken = async () => {
        const a = await getAccessTokenSilently();
        console.log(a);
        token = a;
    };
    getToken();


    return (
        <>
            <h1>Dashboard page</h1>
            <h2>Welcome back, {user?.name}</h2>
            <h2>Email: {user?.email}</h2>
            <AuthenticationButton />
        </>
    )
}

export default Dashboard;