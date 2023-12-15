import React from 'react';
import PropTypes from 'prop-types';

import { UIStyledButton } from './ui';

const UIButton = ({ children, ...otherProps }) => {
  return <UIStyledButton {...otherProps}>{children}</UIStyledButton>;
};

export default UIButton;

UIButton.propTypes = {
  children: PropTypes.string,
};

UIButton.defaultProps = {
  variant: 'contained',
};
