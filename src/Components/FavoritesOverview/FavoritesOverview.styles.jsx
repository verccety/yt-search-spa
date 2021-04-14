import styled from 'styled-components/macro';
import { Row } from 'antd';

export const FavoriteContainer = styled(Row)`
  background-color: #fff;
  width: 100%;
  padding: 2rem 3rem;
  transition: all 0.2s;
  cursor: pointer;

  & > div:last-child {
    transition: all 0.2s;

    visibility: hidden;
    opacity: 0;
  }

  &:hover {
    background-color: #f1f1f1;

    & > div:last-child {
      visibility: visible;
      opacity: 1;
    }
  }
`;
