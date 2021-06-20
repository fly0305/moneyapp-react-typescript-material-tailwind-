import Auth from '@aws-amplify/auth';
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiClient } from '../../../api/client';
import AuthState from '../AuthState';

export const logout = createAsyncThunk<any>(
  'auth/logout',
  async (): Promise<any> => {
    await Auth.signOut();
    ApiClient.clearToken();
  }
);

export const logoutThunkReducers = (builder: ActionReducerMapBuilder<AuthState>) => {
  builder.addCase(logout.fulfilled, (state, { payload }) => {
    state.isAuthenticated = false;
    state.user = undefined;
  });
};
