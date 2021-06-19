import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiClient } from '../../../api/client';
import ListingState from '../ListingState';

export interface saveListingInterface {
  listingId: string;
}

export const saveListing = createAsyncThunk<string, saveListingInterface>(
  'listing/save',
  async ({ listingId }) => {
    await ApiClient.saveListing(listingId);
    return listingId;
  }
);

export const saveListingReducers = (builder: ActionReducerMapBuilder<ListingState>) => {
  builder.addCase(saveListing.fulfilled, (state, { payload }) => {
    state.details[payload].saved = true;

    const summary = state.listings[state.listings.findIndex((l) => l.id === payload)];
    if (summary) summary.saved = true;
  });
};
