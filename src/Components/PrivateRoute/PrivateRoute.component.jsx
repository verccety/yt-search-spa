import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Context } from 'App.js';

function PrivateRoute({ children, ...rest }) {
  const { auth } = useContext(Context);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
