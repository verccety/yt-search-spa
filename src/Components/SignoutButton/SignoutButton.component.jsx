import { Button } from 'antd';
import { Context } from 'App.js';
import React, { useContext } from 'react';
import styles from './SignoutButton.module.scss';

const SignoutButton = () => {
  const { setAuth } = useContext(Context);

  const signOut = () => {
    localStorage.removeItem('token');
    setAuth(null);
  };
  return (
      <Button onClick={signOut} type='link' size='large' className={styles.logout}>
        Выйти
      </Button>
  );
};

export default SignoutButton;
