import Auth from '@aws-amplify/auth';
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiClient, UpdateUserProfileResponse } from '../../../api/client';
import AuthState from '../AuthState';

interface updateUserProps {
  photo?: string;
  firstName?: string;
  lastName?: string;
}

export const updateUser = createAsyncThunk<UpdateUserProfileResponse, updateUserProps>(
  'auth/update',
  async ({ photo, firstName, lastName }) => {
    const user = await Auth.currentAuthenticatedUser();

    let file: Blob | undefined = undefined;

    if (photo) {
      const byteString = atob(photo.split(',')[1]);
      // separate out the mime component
      const mimeString = photo.split(',')[0].split(':')[1].split(';')[0];
      // write the bytes of the string to an ArrayBuffer
      const ab = new ArrayBuffer(byteString.length);
      // create a view into the buffer
      const ia = new Uint8Array(ab);
      // set the bytes of the buffer to the correct values
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      // write the ArrayBuffer to a blob, and you're done
      const blob = new Blob([ab], { type: mimeString });

      file = blob;
    }

    const res = await ApiClient.updateUserInfo({
      photo: file,
      first_name: firstName,
      last_name: lastName,
    });
    Auth.updateUserAttributes(user, {});
    return res;
  }
);

export const updateUserReducers = (builder: ActionReducerMapBuilder<AuthState>) => {
  builder.addCase(updateUser.fulfilled, (state, { payload }) => {
    if (state.user) {
      state.user = {
        ...state.user,
        ...payload,
      };
    }
  });
};
