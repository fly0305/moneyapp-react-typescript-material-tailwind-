import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

interface AccountProps {}

const Account: React.FC<AccountProps> = () => {

  const history = useHistory();
  const isAuth = useAuth();

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
