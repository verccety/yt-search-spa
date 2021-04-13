import styled from 'styled-components/macro';
import { Layout, Menu, Row } from 'antd';
const { Header } = Layout;

export const StyledHeader = styled(Header)`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: #fff;
  border-bottom: 1px solid rgb(240, 240, 240);
  height: 8rem;
`;

export const Container = styled(Row)`
  height: 100%;
  display: flex;
  margin: 0 auto;
  width: 55%;
`;

export const Logo = styled.img`
  margin-right: 4rem;
  height: 48px;
  width: 48px;
`;

export const StyledMenu = styled(Menu)`
  font-size: 1.8rem;
  border-bottom: none;
  height: 100%;
  color: #1890ff;

  li {
    line-height: 7.8rem;
  }
`;
