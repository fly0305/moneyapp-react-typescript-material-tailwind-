import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import Button from '../../components/atom/Button';
import Appbar from '../../components/main/Appbar';
import { RootState } from '../../redux/store';
import Account from './Account';
import Browse from './Browse';
import Saved from './Saved';

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  const selector = (state: RootState) => ({
    isAuth: state.auth.isAuthenticated,
  });
  const { isAuth } = useSelector(selector);

  return (
    <>
      <div className={'flex-grow p-4 pb-24 flex flex-col md:w-3/4 md:mx-auto md:pt-8'}>
        <Switch>
          <Route path={'/'} render={() => <Browse />} exact />
          <Route path={'/saved'} render={() => <Saved />} exact />
          <Route path={'/account'} render={() => <Account />} exact />
        </Switch>
        <Link to={'/signin'} className={'md:hidden fixed bottom-20 inset-x-0 px-6'}>
          {!isAuth && <Button block>List your room with EasyRent</Button>}
        </Link>
        <Appbar />
      </div>
    </>
  );
};

export default Main;
