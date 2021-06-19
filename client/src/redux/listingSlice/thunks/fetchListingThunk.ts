import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiClient, ListingDetailsDto } from '../../../api/client';
import ListingState from '../ListingState';

export interface fetchListingInterface {
  listingId: string;
}

export const fetchListing = createAsyncThunk<ListingDetailsDto, fetchListingInterface>(
  'listing/enquire',
  async ({ listingId }) => {
    const res = await ApiClient.fetchListingDetailsById(listingId);

    if (!res) {
      throw new Error('No listing found');
    }
    return res;
  }
);

export const fetchListingReducers = (builder: ActionReducerMapBuilder<ListingState>) => {
  builder.addCase(fetchListing.fulfilled, (state, { payload }) => {
    state.details[payload.id] = payload;
  });
};
