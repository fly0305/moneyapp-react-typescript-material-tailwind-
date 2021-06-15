import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import FeatureState from './FeatureState';
import preval from 'preval.macro';

// This allows us to override feature flags using environment variables. To use this add the following line to your .env file:
// REACT_APP_FEATURE_FLAG_OVERRIDES=<feature_name>:<true | false>,<feature_name>:<true | false>,
const featureOverrides = preval`
  module.exports = process.env.REACT_APP_FEATURE_FLAG_OVERRIDES?.split(',').reduce((p, c, i) => {
    const [flag, value] = c.split(':');
    if(flag && value === 'true' || value === 'false'){
      p[flag] = JSON.parse(value);
    }
    return p;
  }, {});
 `;

export const initialState: FeatureState = {
  enable_accounts: true,
  enable_listing_form: true,
  enable_facebook_oauth: false,
  ...featureOverrides,
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
