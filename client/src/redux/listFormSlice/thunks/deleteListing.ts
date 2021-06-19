import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiClient } from '../../../api/client';

interface deleteListingInterface {
  listingId: string;
}

export const deleteListing = createAsyncThunk<string, deleteListingInterface>(
  'listingForm/delete',
  async ({ listingId }, API) => {
    await ApiClient.deleteListing(listingId);
    return listingId;
  }
);
