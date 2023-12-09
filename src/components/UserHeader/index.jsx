import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { IoIosArrowDown } from 'react-icons/io';

import { Logout } from 'components';
import { StyledBox } from './ui';

const ChatHeader = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
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
        <Logout bgcolor="#6c6c6c" padding="2px" />
      </StyledBox>
      <StyledBox>
        <Typography sx={{ fontWeight: 'bold' }} variant="body2">
          Messages
        </Typography>
        <Typography variant="body2">Requests</Typography>
      </StyledBox>
    </>
  );
};

export default ChatHeader;
