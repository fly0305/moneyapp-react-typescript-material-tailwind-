import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useFeatureFlag from '../../hooks/useFeatureFlag';
import useUserGroup from '../../hooks/useUserGroup';
import { logout } from '../../redux/authSlice/thunks/logoutThunk';
import { RootState, useAppDispatch } from '../../redux/store';

interface AccountProps {}

const Account: React.FC<AccountProps> = () => {
  const selector = (state: RootState) => ({
    user: state.auth.user,
    listingId: state.listing.usersListingId,
  });
  const { user, listingId } = useSelector(selector);
  const dispatch = useAppDispatch();

  const history = useHistory();
  const isAuth = useAuth();

  const isAdmin = useUserGroup('administrators');

  const enable_listing_form = useFeatureFlag('enable_listing_form');

  useEffect(() => {
    if (!isAuth) {
      history.push('/signin?gotoOnAuth=/account');
    }
  }, [history, isAuth]);

  return (
    <div className={'flex flex-col flex-grow '}>
      Account page
    </div>
  );
};

export default Account;
