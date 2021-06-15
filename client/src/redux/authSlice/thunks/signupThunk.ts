import Auth, { CognitoUser } from '@aws-amplify/auth';
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import state from '../AuthState';

interface signupThunkInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface result {
  user: CognitoUser;
  userConfirmed: boolean;
  userSub: string;
  codeDeliveryDetails: any;
}

export const signup = createAsyncThunk<result, signupThunkInterface>(
  'auth/signup',
  async ({ firstName, lastName, email, password }) =>
    await Auth.signUp({
      username: email,
      password,
      attributes: {
        name: `${firstName} ${lastName}`,
        given_name: firstName,
        family_name: lastName,
        email,
      },
    })
);

export const signupThunkReducers = (builder: ActionReducerMapBuilder<state>) => {
  builder.addCase(signup.fulfilled, (state, { payload: { user } }) => {
    state.isAuthenticated = false;
    state.isConfirmed = false;
  });

  builder.addCase(signup.rejected, (state, { payload }) => {});
};
