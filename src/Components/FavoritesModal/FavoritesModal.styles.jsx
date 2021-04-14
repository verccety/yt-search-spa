import styled from 'styled-components/macro';

import { Modal } from 'antd';

export const StyledModal = styled(Modal)`
  & > .ant-modal-content {
    box-shadow: 0px 10px 50px rgba(19, 144, 229, 0.3);
    border-radius: 10px;
  }

  & > .ant-modal-content > .ant-modal-header {
    margin-top: 2rem;
    text-align: center;
    border-bottom: none;
    border-radius: 10px;

    .ant-modal-title {
      transform: translateY(1rem);
      font-size: 18px;
      font-weight: 500;
    }
  }
`;
