// router
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { DetailPage } from '../pages/DetailPage';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { SearchPage } from '../pages/SearchPage';
import { PrivateRoute } from './PrivateRoutes';
import { PublicRoute } from './PublicRoute';

export const RouterAuth = () => {
  let { userAuth } = useSelector((state) => state.auth);

  userAuth = true;

  return (
    <Router>
      <Switch>
        <PrivateRoute
          exact
          path='/login'
          component={Login}
          isLoggedIn={userAuth}
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
          path='/search'
          component={SearchPage}
        />
        <PrivateRoute
          isLoggedIn={userAuth}
          exact
          path='/search/:term'
          component={SearchPage}
        />
        <PrivateRoute path='/home' isLoggedIn={userAuth} component={Home} />
        <Redirect to={userAuth ? '/home' : '/login'} />
      </Switch>
    </Router>
  );
};
