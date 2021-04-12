import React, { useContext } from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';
import styles from './LoginForm.module.scss';
import { Context } from 'App.js';
import verifyUser from 'utils/verifyUser';
import generateToken from 'utils/tokenGenerator';

const LoginForm = () => {
  const { setAuth } = useContext(Context);

  const onFinish = ({ login, password }) => {
    if (verifyUser(login, password)) {
      const token = generateToken();
      localStorage.setItem('token', JSON.stringify(token));
      setAuth(token);
      message.success('Logged in successfully');
      return;
    }

    message.error('Auth error: invalid credentials');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        layout='vertical'
        requiredMark={false}
        size='large'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item name={'login'} label='Логин' className={styles.label}>
          <Input disabled={false} />
        </Form.Item>

        <Form.Item name={'password'} label='Пароль' className={styles.label}>
          <Input.Password disabled={false} />
        </Form.Item>

        <Row justify='center'>
          <Col>
            <Form.Item>
              <Button
                loading={false}
                type='primary'
                htmlType='submit'
                className={styles.buttonLogin}
              >
                Войти
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default LoginForm;
