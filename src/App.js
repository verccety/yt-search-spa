import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import SignIn from 'Pages/SignIn/SignIn.component';

function App() {
  return (
    <div className='App'>
      <SignIn />
    </div>
  );
}

export default App;
