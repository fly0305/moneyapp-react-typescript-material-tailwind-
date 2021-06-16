import React from 'react';
import Button from "@material-ui/core/Button";
import { Route, Switch } from 'react-router';
import Login from './Login';
import Signup from './Signup';
import { Link, useHistory } from 'react-router-dom';

const Auth: React.FC = () => {
  const history = useHistory();
  return (
    <div className={'flex flex-col justify-start p-5 md:w-1/4 md:m-auto'}>
      <Switch>
        <Route path='/signin' render={() => <Login />} />
        <Route path='/signup' render={() => <Signup />} />
      </Switch>
      <Button variant="outlined">Continue with Google</Button>
    </div>
  );
};

export default Auth;
