import PropTypes from 'prop-types';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { StyledBox, StyledGridContainer, StyledProfilePicture } from './ui';

const ChatItem = ({ chat, chatWindow, clearSelectedChat }) => {
  const { userName, avatarImage } = chat;

  const isSmallDevice = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const useNavigateToBack = () => {
    clearSelectedChat();
  };

  return (
    <>
      <StyledBox>
        <StyledGridContainer container>
          <Grid item xs={isSmallDevice ? 2.5 : chatWindow ? 0.8 : 2.5}>
            <StyledProfilePicture src={avatarImage} alt="profilePic" />
          </Grid>
          <Grid item xs={isSmallDevice ? 9.5 : chatWindow ? 11.2 : 9.5}>
            <Typography>{userName}</Typography>
          </Grid>
          {isSmallDevice && chatWindow && (
            <ArrowBackIcon
              onClick={() => useNavigateToBack()}
              sx={{ color: 'white' }}
            />
          )}
        </StyledGridContainer>
      </StyledBox>
    </>
  );
};

export default ChatItem;

ChatItem.propTypes = {
  chat: PropTypes.object,
  chatWindow: PropTypes.bool,
  clearSelectedChat: PropTypes.func,
};
