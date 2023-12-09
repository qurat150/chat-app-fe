import React from 'react';
import { Outlet } from 'react-router-dom';

import { FlexBoxCentered } from 'styles';

const ErrorLayout = () => {
  return (
    <FlexBoxCentered height="100vh">
      <Outlet />
    </FlexBoxCentered>
  );
};

export default ErrorLayout;
