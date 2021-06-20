import Auth from '@aws-amplify/auth';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import authConfig from '../../authConfig';
import { hydrateAuth } from '../../redux/authSlice/thunks/hydrateThunk';
import { RootState, useAppDispatch } from '../../redux/store';

export interface AuthWrapperProps {}

Auth.configure(authConfig);

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const selectorFn = (store: RootState) => store.auth.isHydrated;

  const isHydrated = useSelector(selectorFn);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(hydrateAuth());
  }, [dispatch]);

  if (!isHydrated) {
    return <h1>Loading</h1>;
  }

  return <>{children}</>;
};

export default AuthWrapper;