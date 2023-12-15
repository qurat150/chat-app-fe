import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { appSocket } from 'services/socket';
import { useDispatch, useSelector } from 'react-redux';
import { verifyToken } from 'redux/slices/auth/controller';

const MainLayout = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn && currentUser) {
      appSocket.configure(currentUser.user._id);
    }
  }, [currentUser]);

  useEffect(() => {
    if (isLoggedIn) {
      const smth = async () => {
        try {
          await dispatch(verifyToken());
        } catch (error) {
          console.log(error);
        }
      };
      smth();
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) return <Navigate to="/signup" />;
  return <Outlet />;
};

export default MainLayout;

MainLayout.propTypes = {
  isLoggedIn: PropTypes.bool,
};
