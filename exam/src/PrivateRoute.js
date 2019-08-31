import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './Auth';

const PrivateRoute = ({ path, render, component: Component, ...props }) => {
  const { isLoggedIn } = useAuth();
  return (
    <Route
      {...props}
      path={path}
      render={args => {
        return isLoggedIn ? (
          Component ? (
            <Component {...args} />
          ) : (
            render(args)
          )
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

export default PrivateRoute;
