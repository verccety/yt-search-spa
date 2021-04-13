import PrivateRoute from 'components/PrivateRoute/PrivateRoute.component';
import SearchPage from 'pages/Search/Search.component';
import FavoritesPage from 'pages/Favorites/Favorites.component';
import SignIn from 'pages/SignIn/SignIn.component';
import React, { createContext, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import MenuLayout from 'components/MenuLayout/MenuLayout.component';

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
          <Route exact path='/sign-in'>
            {auth ? <Redirect to='/search' /> : <SignIn />}
          </Route>
          <MenuLayout>
            <PrivateRoute exact path='/search'>
              <SearchPage />
            </PrivateRoute>

            <PrivateRoute exact path='/favorites'>
              <FavoritesPage />
            </PrivateRoute>
          </MenuLayout>
          <Route path='/'>{auth ? <Redirect to='/search' /> : <Redirect to='/sign-in' />}</Route>
        </Switch>
      </div>
    </Context.Provider>
  );
}

export default App;
