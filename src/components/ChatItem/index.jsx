import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';

import { StyledBox, StyledGridContainer, StyledProfilePicture } from './ui';

const ChatItem = ({ chat, chatWindow }) => {
  const { userName, avatarImage } = chat;

  return (
    <>
      <StyledBox>
        <StyledGridContainer container>
          <Grid item xs={chatWindow ? 0.8 : 2.5}>
            <StyledProfilePicture src={avatarImage} alt="profilePic" />
          </Grid>
          <Grid item xs={chatWindow ? 11.2 : 9.5}>
            <Typography>{userName}</Typography>
          </Grid>
        </StyledGridContainer>
      </StyledBox>
    </>
  );
};

export default ChatItem;

ChatItem.propTypes = {
  chat: PropTypes.object,
  chatWindow: PropTypes.bool,
};
