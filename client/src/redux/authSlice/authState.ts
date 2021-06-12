type AuthState = {
    // If the user is authenticated
    isAuthenticated?: boolean;
    // If the user's account requires verification
    isConfirmed?: boolean;
    // If the authentication state is hydrated
    isHydrated: boolean;
    // The user's username
    user?: {
      token: string;
      name: string;
      email: string;
      picture: string;
      groups: string[];
      username: string;
    };
  };
  
  export default AuthState;