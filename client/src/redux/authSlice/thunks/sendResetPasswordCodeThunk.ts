import Auth from '@aws-amplify/auth';
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import state from '../AuthState';

interface sendResetPasswordCodeThunkInterface {
  username: string;
}

export const sendResetPasswordCode = createAsyncThunk<any, sendResetPasswordCodeThunkInterface>(
  'auth/sendResetPasswordCode',
  async ({ username }) => {
    await Auth.forgotPassword(username);
  }
);

export const sendResetPasswordCodeThunkReducers = (builder: ActionReducerMapBuilder<state>) => {
  builder.addCase(sendResetPasswordCode.fulfilled, (state, { payload }) => {
    state.isConfirmed = true;
  });
};
