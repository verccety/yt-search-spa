import styled from 'styled-components/macro';
import { Row } from 'antd';

export const Container = styled(Row)`
  display: grid;
  height: calc(100vh - 8rem);
  width: 100%;
  place-content: center;
`;

export const SearchContainer = styled(Row)`
  font-size: 2.6rem;
  margin: auto;
  max-width: 50%;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 400;
  line-height: 52px;
  margin-bottom: 4rem;
`;
