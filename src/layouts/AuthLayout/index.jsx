import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AuthLayout = ({ isLoggedIn }) => {
  const location = useLocation();

  if (isLoggedIn) {
    const nav = location.pathname === '/signup' ? '/set-profile-picture' : '/';
    return <Navigate to={nav} />;
  }
  return <Outlet />;
};

export default AuthLayout;

AuthLayout.propTypes = {
  isLoggedIn: PropTypes.bool,
};
