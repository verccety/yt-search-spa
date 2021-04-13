import styled from 'styled-components/macro';
import { Row, Col, Typography } from 'antd';

const { Title } = Typography;

export const Container = styled(Row)`
  min-height: 100vh;
  background-color: #fafafa;
`;

export const LoginContainer = styled(Col)`
  background-color: #fff;
  border: 1px solid rgba(39, 39, 39, 0.1);
  border-radius: 5px;
  padding: 4rem 1rem;
  width: 55rem;
  display: grid;
  place-content: center;
  place-items: center;
`;

export const LogoContainer = styled(Row)`
  margin-bottom: 4rem;
`;

export const StyledHeader = styled(Title)`
  &&& {
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
  }
`;
