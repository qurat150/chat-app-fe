import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { appSocket } from 'services/socket';
import { useDispatch, useSelector } from 'react-redux';
import { verifyToken } from 'redux/slices/auth/controller';
import { UILoading } from 'components';

const MainLayout = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

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
        } finally {
          setIsLoading(false);
        }
      };
      smth();
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) return <Navigate to="/signup" />;
  return isLoading ? <UILoading /> : <Outlet />;
};

export default MainLayout;

MainLayout.propTypes = {
  isLoggedIn: PropTypes.bool,
};
