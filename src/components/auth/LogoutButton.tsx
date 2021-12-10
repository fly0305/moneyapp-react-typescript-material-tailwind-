import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    // <Button
    //   variant="outlined"
    //   style={{ backgroundColor: '#bf3939', color: '#FFFFFF' }}
    // onClick={() =>
    //   logout({
    //     returnTo: window.location.origin,
    //   })
    // }
    // >
    //   Log Out
    // </Button>
    <button
      className="h-12 px-6 text-indigo-100 transition-colors duration-150 bg-green-600 rounded-lg focus:shadow-outline hover:bg-red-800"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
