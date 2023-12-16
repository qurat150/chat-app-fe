import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, useMediaQuery } from '@mui/material';

import { verifyToken } from 'redux/slices/auth/controller';
import { getAllUsers } from 'apis/auth';
import { ChatContainer, ChatHeader, ChatItem } from 'components';
import { StyledChatContainer } from './ui';

const Chat = () => {
  const dispatch = useDispatch();

  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  useEffect(() => {
    const gettingChats = async () => {
      let { payload } = await dispatch(verifyToken());
      const currentUserID = payload.user._id;
      const res = await getAllUsers(currentUserID);
      setChats(res.data);
    };
    gettingChats();
  }, []);

  const changeCurrentChat = (index) => {
    setCurrentChat(chats[index]);
  };

  const clearSelectedChat = () => {
    setCurrentChat(null);
  };

  const isSmallDevice = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const showChatOnLargeDevice = !isSmallDevice;
  const showChatOnSmallDevice = isSmallDevice && !currentChat;

  return (
    <StyledChatContainer>
      <Grid container spacing={0}>
        {(showChatOnLargeDevice || showChatOnSmallDevice) && (
          <Grid item xs={12} sm={3} sx={{ padding: '20px' }}>
            <ChatHeader />
            {chats.map((chat, index) => (
              <div key={index} onClick={() => changeCurrentChat(index)}>
                <ChatItem chat={chat} />
              </div>
            ))}
          </Grid>
        )}

        <Grid item xs={12} sm={isSmallDevice ? 12 : 9}>
          {currentChat && (
            <ChatContainer
              clearSelectedChat={clearSelectedChat}
              currentChat={currentChat}
            />
          )}
        </Grid>
      </Grid>
    </StyledChatContainer>
  );
};

export default Chat;
