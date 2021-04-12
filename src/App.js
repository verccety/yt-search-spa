import React, { useState, createContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import './App.css';
import SignIn from 'pages/SignIn/SignIn.component';

export const Context = createContext();

function App() {
  const [auth, setAuth] = useState(() => {
    const initialState = localStorage.getItem('token');
    return initialState ? JSON.parse(initialState) : null;
  });

  return (
    <Context.Provider value={{ auth, setAuth }}>
      <div className='App'>
        <Route exact path='/sign-in'>
          {auth ? <Redirect to='/search' /> : <SignIn />}
        </Route>

        <Route path='/'>{auth ? <Redirect to='/search' /> : <Redirect to='/sign-in' />}</Route>
      </div>
    </Context.Provider>
  );
}

export default App;
