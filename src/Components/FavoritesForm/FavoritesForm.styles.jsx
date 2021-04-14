import styled from 'styled-components/macro';
import { css } from 'styled-components';
import { Button } from 'antd';

const buttonStyles = css`
  width: 210px;
  height: 52px;
  font-size: 20px;
  padding: 0 4rem;
  border-radius: 5px;
  display: inline-block;
`;

export const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 21,
  },
};

export const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const CancelButton = styled(Button)`
  ${buttonStyles}
  border: 1px solid #1390e5;
  color: #1390e5;
  margin-right: 1rem;
`;

export const SubmitButton = styled(Button)`
  ${buttonStyles}
  background: #1390e5;
  border-radius: 5px;
  color: #fff;
`;
