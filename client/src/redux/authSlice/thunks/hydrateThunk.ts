import Auth from '@aws-amplify/auth';
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiClient } from '../../../api/client';
import AuthState from '../AuthState';

export const hydrateAuth = createAsyncThunk('auth/hydrate', async () => {
  const user = await Auth.currentAuthenticatedUser();

  ApiClient.setToken(user.signInUserSession.accessToken.jwtToken);

  return {
    name: user.attributes.name || '',
    token: user.signInUserSession.accessToken.jwtToken,
    email: user.attributes.email || '',
    picture: user.attributes.picture,
    groups: user.signInUserSession.idToken.payload['cognito:groups'],
    username: user.attributes.sub,
    fistName: user.attributes.given_name,
    lastName: user.attributes.family_name,
  };
});

export const hydrateAuthReducers = (builder: ActionReducerMapBuilder<AuthState>) => {
  builder.addCase(hydrateAuth.fulfilled, (state, { payload }) => {
    state.isHydrated = true;
    state.isAuthenticated = true;
    state.isConfirmed = true;
    state.user = payload;
  });
  builder.addCase(hydrateAuth.rejected, (state, action) => {
    state.isHydrated = true;
  });
};
