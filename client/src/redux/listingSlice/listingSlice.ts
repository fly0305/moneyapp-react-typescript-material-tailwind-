import { createSlice } from '@reduxjs/toolkit';
import { login } from '../authSlice/thunks/loginThunk';
import { logout } from '../authSlice/thunks/logoutThunk';
import { createListing } from '../listFormSlice/thunks/createListing';
import { deleteListing } from '../listFormSlice/thunks/deleteListing';
import ListingState from './ListingState';
import { fetchListingReducers } from './thunks/fetchListingThunk';
import { hydrateListingsReducers } from './thunks/hydrateListingThunk';
import { saveListingReducers } from './thunks/saveListing';
import { unsaveListingReducers } from './thunks/unsaveListing';

const listingSlice = createSlice({
  name: 'listing',
  initialState: {
    listings: [],
    shouldFetch: true,
    details: {},
  } as ListingState,
  reducers: {},
  extraReducers: (builder) => {
    hydrateListingsReducers(builder);
    fetchListingReducers(builder);
    saveListingReducers(builder);
    unsaveListingReducers(builder);
    builder.addCase(logout.fulfilled, (state, { payload }) => {
      state.shouldFetch = true;
      state.details = {};
    });

    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.shouldFetch = true;
      state.details = {};
    });
    builder.addCase(createListing.fulfilled, (state, { payload }) => {
      state.listings = [payload, ...state.listings];
      state.usersListingId = payload.id;
    });
    builder.addCase(deleteListing.fulfilled, (state, { payload }) => {
      state.listings = state.listings.filter((i) => i.id !== payload);
      delete state.details[payload];
      state.usersListingId = undefined;
    });
  },
});

const { reducer } = listingSlice;

export default reducer;
