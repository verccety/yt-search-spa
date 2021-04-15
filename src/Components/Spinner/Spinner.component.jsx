import React from 'react';
import { Spin } from 'antd';
import { SpinnerOverlay } from './Spinner.styles';

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <Spin size='large' />
    </SpinnerOverlay>
  );
};

export default Spinner;
