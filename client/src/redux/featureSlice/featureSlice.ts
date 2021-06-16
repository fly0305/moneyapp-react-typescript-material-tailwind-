import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import FeatureState from './FeatureState';


export const initialState: FeatureState = {
  enable_accounts: true,
  enable_listing_form: true,
  enable_facebook_oauth: false
};

const featureSlice = createSlice({
  name: 'feature',
  initialState,
  reducers: {
    setFlags: (state, { payload }: PayloadAction<FeatureState>) => ({
      ...payload,
    }),
  },
  extraReducers: (builder) => {},
});

const { reducer, actions } = featureSlice;

export const { setFlags } = actions;

export default reducer;
