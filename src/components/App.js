import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// components
import Layout from './Layout';

import authSvc from '../services/AuthService';

// pages
import Error from 'pages/error';
import Login from 'pages/login';
import Logout from '../pages/logout/logout';
import MarginRequirementDetails from 'pages/MarginRequirement/MarginRequirementDetails';
import SegregationLockupTable from 'pages/Segregation/Components/SegregationLockUpTable';
import Transaction from 'pages/Transaction/Transaction';
import ChangePassword from '../pages/ChangePassword/ChangePassword';

export default function App() {
  useEffect(() => {
    try {
      const user = authSvc.getCurrentUser();
      setUser(user);

      const isValid = authSvc.getValidCodeResponse();
      setIsCodeValidated(isValid);

      const pages = authSvc.getPages();
      setPages(pages);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const [user, setUser] = useState({});
  const [pages, setPages] = useState([]);
  const [isCodeValidated, setIsCodeValidated] = useState(false);
  const isAuth = () => {
    return user && user.Username && isCodeValidated;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/app/account-setup/user" />}
        />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/account-setup/user" />}
        />
        <PrivateRoute path="/app" component={Layout} />
        <PrivateRoute
          path="/margin-interest/margin-requirement-details/:tradeDate?/:masterAccountNo?"
          component={MarginRequirementDetails}
        />
        <PrivateRoute
          path="/segregation/segregation-lockup/:settleDate?/:numberOrCusip?/:type?"
          component={SegregationLockupTable}
        />
        <PrivateRoute
          path="/app/trns/transaction/cancel-and-correct/:trnsId?/:accountId?"
          component={Transaction}
        />
        <PublicRoute path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/app/change-password/" component={ChangePassword} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) => {
          if (isAuth())
            return React.createElement(component, {
              ...props,
              user: user,
              pages: pages,
            });

          if (props.location.search)
            sessionStorage.setItem(
              'search',
              props.location.search.substring(1, props.location.search.length)
            );

          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }}
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) => {
          if (!isAuth()) return React.createElement(component, props);

          const searchQuery = sessionStorage.getItem('search');
          sessionStorage.removeItem('search');

          return (
            <Redirect
              to={{
                pathname: props.location?.state?.from?.pathname || '/',
                search: searchQuery || '',
              }}
            />
          );
        }}
      />
    );
  }
}
