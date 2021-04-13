import { Col, Form, Input, message, Row } from 'antd';
import { Context } from 'App.js';
import React, { useContext } from 'react';
import generateToken from 'utils/tokenGenerator';
import verifyUser from 'utils/verifyUser';
import { LoginButton, StyledFormItem } from './LoginForm.styles';

const LoginForm = () => {
  const { setAuth } = useContext(Context);

  const onFinish = ({ login, password }) => {
    if (verifyUser(login, password)) {
      const token = generateToken();
      localStorage.setItem('token', JSON.stringify(token));
      setAuth(token);
      message.success('Вход выполнен успешно');
      return;
    }

    message.error('Ошибка авторизации: неверные данные');
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
        <StyledFormItem
          name={'login'}
          label='Логин'
          rules={[
            {
              required: true,
              message: 'Введите имя пользователя',
            },
          ]}
        >
          <Input disabled={false} />
        </StyledFormItem>

        <StyledFormItem
          name={'password'}
          label='Пароль'
          rules={[
            {
              required: true,
              message: 'Введите пароль',
            },
          ]}
        >
          <Input.Password disabled={false} />
        </StyledFormItem>

        <Row justify='center'>
          <Col>
            <Form.Item>
              <LoginButton loading={false} type='primary' htmlType='submit'>
                Войти
              </LoginButton>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default LoginForm;
