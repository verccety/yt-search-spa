import { Button, Form } from 'antd';
import styled from 'styled-components/macro';

export const StyledFormItem = styled(Form.Item)`
  width: 334px;

  :last-child {
    border-radius: 3px;
  }

  > div > label {
    color: rgba(23, 23, 25, 0.3);
    font-size: 1.6rem;
    font-weight: 400;
    font-family: Roboto;
    font-style: normal;
    line-height: 22px;
  }
`;

export const LoginButton = styled(Button)`
  padding: 1rem 5rem;
  height: max-content;
  border-radius: 5px;
  font-size: 2rem;
`;
