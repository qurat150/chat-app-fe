import { UIButton } from 'components';
import React from 'react';
import { useDispatch } from 'react-redux';
import { userlogout } from 'redux/slices/auth/auth.slice';
import PropTypes from 'prop-types';

const Logout = ({ bgcolor }) => {
  const dispatch = useDispatch();
  return (
    <UIButton bgcolor={bgcolor} onClick={() => dispatch(userlogout())}>
      Logout
    </UIButton>
  );
};

export default Logout;

Logout.propTypes = {
  bgcolor: PropTypes.string,
};
