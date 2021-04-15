import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary.component';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute.component';
import React, { createContext, useState, lazy, Suspense } from 'react';
import Spinner from 'components/Spinner/Spinner.component';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

const SearchPage = lazy(() => import('pages/Search/Search.component'));
const SignIn = lazy(() => import('pages/SignIn/SignIn.component'));
const FavoritesPage = lazy(() => import('pages/Favorites/Favorites.component'));

export const Context = createContext();

function App() {
  const [auth, setAuth] = useState(() => {
    const initialState = localStorage.getItem('token');
    return initialState ? JSON.parse(initialState) : null;
  });

  return (
    <Context.Provider value={{ auth, setAuth }}>
      <div className='App'>
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/sign-in'>
              {auth ? <Redirect to='/search' /> : <SignIn />}
            </Route>
            <ErrorBoundary>
              <PrivateRoute exact path='/search'>
                <SearchPage />
              </PrivateRoute>

              <PrivateRoute exact path='/favorites'>
                <FavoritesPage />
              </PrivateRoute>

              <Route path='/'>
                {auth ? <Redirect to='/search' /> : <Redirect to='/sign-in' />}
              </Route>
            </ErrorBoundary>
          </Suspense>
        </Switch>
      </div>
    </Context.Provider>
  );
}

export default App;
