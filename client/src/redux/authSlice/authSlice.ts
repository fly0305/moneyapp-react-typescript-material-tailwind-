import Auth from '@aws-amplify/auth';
import { createSlice } from '@reduxjs/toolkit';
import AuthState from './AuthState';
import { confirmSignupThunkReducers } from './thunks/confirmSignupThunk';
import { hydrateAuthReducers } from './thunks/hydrateThunk';
import { loginThunkReducers } from './thunks/loginThunk';
import { logoutThunkReducers } from './thunks/logoutThunk';
import { signupThunkReducers } from './thunks/signupThunk';
import { updateUserReducers } from './thunks/updateUserThunk';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    isHydrated: false,
    isConfirmed: true,
    isAdmin: false,
  } as AuthState,
  reducers: {
    googleLogin: (state, action) => {
      Auth.federatedSignIn({ provider: 'Google' } as any);
    }
  },
  extraReducers: (builder) => {
    hydrateAuthReducers(builder);
    loginThunkReducers(builder);
    logoutThunkReducers(builder);
    signupThunkReducers(builder);
    confirmSignupThunkReducers(builder);
    updateUserReducers(builder);
  },
});

const { reducer, actions } = authSlice;

export const { googleLogin } = actions;

export default reducer;
