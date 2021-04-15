import styled from 'styled-components/macro';
import { Col } from 'antd';

export const Container = styled(Col).attrs(() => ({
  span: 24,
}))`
  display: grid;
  grid-template-columns: 100%;
  padding: 0 5rem;
  justify-content: center;
  max-width: 100rem;
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 3rem;
  gap: 0.5rem;
`;
