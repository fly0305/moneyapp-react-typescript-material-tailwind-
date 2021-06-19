import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from './authSlice/authSlice';
import listingSlice from './listingSlice/listingSlice';
import listFormSlice from './listFormSlice/listFormSlice';
import featureSlice from './featureSlice/featureSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    listing: listingSlice,
    listForm: listFormSlice,
    features: featureSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
