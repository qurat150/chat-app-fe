import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { appSocket } from 'services/socket';
import { useSelector } from 'react-redux';

const MainLayout = ({ isLoggedIn }) => {
  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn && currentUser) {
      appSocket.configure(currentUser.user._id);
    }
  }, [currentUser]);

  if (!isLoggedIn) return <Navigate to="/signup" />;
  return <Outlet />;
};

export default MainLayout;

MainLayout.propTypes = {
  isLoggedIn: PropTypes.bool,
};
