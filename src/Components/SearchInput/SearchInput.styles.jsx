import styled from 'styled-components/macro';
import { Input } from 'antd';
const { Search } = Input;

export const StyledSearch = styled(Search)`
  min-width: 68rem;

  &&& > span > input {
    border-radius: 3px;
    height: 4.8rem;
    font-size: 2rem;
    line-height: 2.4rem;
  }

  &&& > span > span > button {
    height: 4.8rem;
    font-size: 2rem;
    line-height: 2.4rem;
  }
`;
