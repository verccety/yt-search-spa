import { Col, Row } from 'antd';
import logo from 'assets/logo.svg';
import LoginForm from 'components/LoginForm/LoginForm.component';
import React, { useEffect } from 'react';
import { Container, LoginContainer, LogoContainer, StyledHeader } from './SignIn.styles';

const SignIn = () => {
  useEffect(() => {
    document.title = 'SPA | Авторизация';
  }, []);
  return (
    <>
      <Container align='middle' justify='center'>
        <LoginContainer>
          <LogoContainer>
            <Col>
              <img src={logo} alt='Logo' />
            </Col>
          </LogoContainer>

          <Row>
            <Col>
              <StyledHeader level={3}>Вход</StyledHeader>
            </Col>
          </Row>

          <Row>
            <Col>
              <LoginForm />
            </Col>
          </Row>
        </LoginContainer>
      </Container>
    </>
  );
};

export default SignIn;
