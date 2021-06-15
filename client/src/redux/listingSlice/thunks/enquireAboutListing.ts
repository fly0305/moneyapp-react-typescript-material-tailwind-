import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiClient } from '../../../api/client';

export interface enquireAboutListingInterface {
  listingId: string;
  message: string;
}

export const enquireAboutListing = createAsyncThunk<void, enquireAboutListingInterface>(
  'listing/inquire',
  async ({ listingId, message }) => await ApiClient.inquireById(listingId, message)
);
