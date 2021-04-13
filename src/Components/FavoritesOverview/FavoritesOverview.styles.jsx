import styled from 'styled-components/macro';
import { Row } from 'antd';

export const FavoriteContainer = styled(Row)`
  background-color: #fff;
  width: 100%;
  padding: 2rem 3rem;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
