import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiClient } from '../../../api/client';
import ListingState from '../ListingState';

export const hydrateListings = createAsyncThunk('listing/hydrate', async () => {
  const res = await ApiClient.fetchListings();

  return res;
});

export const hydrateListingsReducers = (builder: ActionReducerMapBuilder<ListingState>) => {
  builder.addCase(hydrateListings.fulfilled, (state, { payload }) => {
    state.listings = payload;
    state.shouldFetch = false;

    const ownListing = payload.find((l) => l.isOwner);

    if (ownListing) {
      state.usersListingId = ownListing.id;
    }
  });
};
