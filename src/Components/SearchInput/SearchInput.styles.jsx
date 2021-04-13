import styled from 'styled-components/macro';
import { Input } from 'antd';
const { Search } = Input;

export const StyledSearch = styled(Search)`
  min-width: 50rem;

  > span > input {
    border-radius: 3px;
  }
`;
