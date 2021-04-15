import { Context } from 'App.js';
import React, { useContext } from 'react';
import { StyledButton } from './SignoutButton.styles';
import { setCurrentUser } from 'redux/user/userSlice';
import { setSearchParams } from 'redux/search/searchSlice';
import { useDispatch } from 'react-redux';

const SignoutButton = () => {
  const { setAuth } = useContext(Context);
  const dispatch = useDispatch();

  const signOut = () => {
    localStorage.removeItem('token');
    setAuth(null);

    dispatch(setCurrentUser(null));
    dispatch(setSearchParams({ searchQuery: null }));
  };
  return (
    <StyledButton onClick={signOut} type='link' size='large'>
      Выйти
    </StyledButton>
  );
};

export default SignoutButton;
