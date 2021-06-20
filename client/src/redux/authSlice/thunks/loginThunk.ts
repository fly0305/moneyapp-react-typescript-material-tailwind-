import Auth from '@aws-amplify/auth';
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiClient } from '../../../api/client';
import pic from '../../../assets/image/default.jpg';
import state from '../AuthState';
interface loginThunkInterface {
  username: string;
  password: string;
}

export const login = createAsyncThunk<any, loginThunkInterface>(
  'auth/login',
  async ({ username, password }) => {
    const user = await Auth.signIn(username, password);

    ApiClient.setToken(user.signInUserSession.accessToken.jwtToken);

    return {
      name: user.attributes.name || '',
      token: user.signInUserSession.accessToken.jwtToken,
      email: user.attributes.email || '',
      picture: user.attributes.picture || pic,
      groups: user.signInUserSession.idToken.payload['cognito:groups'],
      username: user.attributes.sub,
      fistName: user.attributes.given_name,
      lastName: user.attributes.family_name,
    };
  }
);

export const loginThunkReducers = (builder: ActionReducerMapBuilder<state>) => {
  builder.addCase(login.fulfilled, (state, { payload }) => {
    state.isAuthenticated = true;
    state.isConfirmed = true;
    state.user = payload;
  });

  builder.addCase(login.rejected, (state, { error, meta }) => {
    if (error.code === 'UserNotConfirmedException') {
      state.isAuthenticated = false;
      state.isConfirmed = false;
    }
  });
};
