import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const onFinish = (values) => {
    console.log('True:', values);
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
          <Input disabled={false} className={styles.labelTest} />
        </Form.Item>

        <Form.Item name={'password'} label='Пароль' className={styles.label}>
          <Input.Password disabled={false} className={styles.labelTest} />
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
