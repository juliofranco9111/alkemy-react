// router
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { startChecking } from '../actions/auth';
import { DetailPage } from '../pages/DetailPage';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { SearchPage } from '../pages/SearchPage';
import { PrivateRoute } from './PrivateRoutes';
import { PublicRoute } from './PublicRoute';

export const RouterAuth = () => {
  const dispatch = useDispatch();
  dispatch(startChecking);
  let { userAuth } = useSelector((state) => state.auth);

  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path='/login'
          isLoggedIn={userAuth}
          component={Login}
        />
        <PrivateRoute
          isLoggedIn={userAuth}
          exact
          path='/details/:id'
          component={DetailPage}
        />

        <PrivateRoute
          isLoggedIn={userAuth}
          exact
          path='/search/:term?'
          component={SearchPage}
        />
        <PrivateRoute path='/home' isLoggedIn={userAuth} component={Home} />
        <Redirect to={userAuth ? '/home' : '/login'} />
      </Switch>
    </Router>
  );
};
