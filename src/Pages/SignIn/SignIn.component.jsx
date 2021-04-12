import React from 'react';
import styles from './SignIn.module.scss';
import { Row, Col, Typography } from 'antd';
import logo from 'assets/logo.svg';
import LoginForm from 'components/LoginForm/LoginForm.component';

const SignIn = () => {
  const { Title } = Typography;

  return (
    <>
      <Row className={styles.mainContainer} align='middle' justify='center'>
        <Col className={styles.loginContainer}>
          <Row className={styles.logoContainer}>
            <Col>
              <img src={logo} alt='Logo' />
            </Col>
          </Row>

          <Row>
            <Col>
              <Title level={3} className={styles.header}>
                Вход
              </Title>
            </Col>
          </Row>

          <Row>
            <Col>
              <LoginForm />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default SignIn;
