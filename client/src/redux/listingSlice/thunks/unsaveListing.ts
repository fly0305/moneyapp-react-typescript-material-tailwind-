import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiClient } from '../../../api/client';
import ListingState from '../ListingState';

export interface unsaveListingInterface {
  listingId: string;
}

export const unsaveListing = createAsyncThunk<string, unsaveListingInterface>(
  'listing/unsave',
  async ({ listingId }) => {
    await ApiClient.unsaveListing(listingId);
    return listingId;
  }
);

export const unsaveListingReducers = (builder: ActionReducerMapBuilder<ListingState>) => {
  builder.addCase(unsaveListing.fulfilled, (state, { payload }) => {
    state.details[payload].saved = false;

    const summary = state.listings[state.listings.findIndex((l) => l.id === payload)];
    if (summary) summary.saved = false;
  });
};
