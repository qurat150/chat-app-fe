import { useState } from 'react';
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowDown } from 'react-icons/io';

import { StyledBox } from './ui';
import { userlogout } from 'redux/slices/auth/auth.slice';

const ChatHeader = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);

  const settings = ['Profile', 'Account', 'Logout'];
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuClick = (event, option) => {
    if (option == 'Logout') {
      dispatch(userlogout());
    }
    if (option == 'Profile' || option == 'Account') {
      alert('Sabar kam chalrha hai is py');
    }
  };

  return (
    <>
      <StyledBox>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ fontWeight: 'bold' }} variant="h5">
            {currentUser?.user?.userName}
          </Typography>
          <IoIosArrowDown
            style={{ marginLeft: '4px', fontSize: '16px', fontWeight: 'bold' }}
          />
        </div>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={currentUser?.user?.avatarImage} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={() => {
                  handleCloseUserMenu();
                  handleMenuClick(event, setting);
                }}
              >
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </StyledBox>
      <StyledBox>
        <Typography sx={{ fontWeight: 'bold' }} variant="body2">
          Messages
        </Typography>
        <Typography sx={{ cursor: 'pointer' }} variant="body2">
          Requests
        </Typography>
      </StyledBox>
    </>
  );
};

export default ChatHeader;
