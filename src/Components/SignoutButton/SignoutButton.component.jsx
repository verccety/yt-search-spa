import { Context } from 'App.js';
import React, { useContext } from 'react';
import { StyledButton } from './SignoutButton.styles';

const SignoutButton = () => {
  const { setAuth } = useContext(Context);

  const signOut = () => {
    localStorage.removeItem('token');
    setAuth(null);
  };
  return (
    <StyledButton onClick={signOut} type='link' size='large'>
      Выйти
    </StyledButton>
  );
};

export default SignoutButton;
