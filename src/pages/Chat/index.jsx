import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, useMediaQuery } from '@mui/material';
import { io } from 'socket.io-client';

import { ChatContainer, ChatHeader, ChatItem } from 'components';
import { verifyToken } from 'redux/slices/auth/controller';
import { getAllUsers } from 'apis/auth';
import { StyledChatContainer } from './ui';

const Chat = () => {
  const dispatch = useDispatch();

  const [currentUser, setCurrentUser] = useState('');
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState('');

  // All Users except current user
  useEffect(() => {
    const gettingChats = async () => {
      let { payload } = await dispatch(verifyToken());
      const currentUserID = payload.user._id;
      const res = await getAllUsers(currentUserID);
      // console.log(res.data);
      setChats(res.data);
      return res;
    };
    gettingChats();
  }, []);

  // Current User Details
  useEffect(() => {
    const gettingCurrentUserDetails = async () => {
      const result = await dispatch(verifyToken());
      setCurrentUser(result.payload.user);
    };
    gettingCurrentUserDetails();
  }, [dispatch]);

  const changeCurrentChat = (index) => {
    setCurrentChat(chats[index]);
  };
  useEffect(() => {
    // console.log(currentChat);
  }, [currentChat]);

  // useEffect(() => {
  //   if (currentUser) {
  //     socket.current = io('http://localhost:5000');
  //     socket.current.emit('add-user', currentUser._id);

  //     console.log(socket);
  //   }
  // }, [currentUser]);

  // console.log(currentUser);
  const isSmallDevice = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <StyledChatContainer>
      <Grid container spacing={0}>
        {!isSmallDevice && (
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
          {currentChat !== '' ? (
            <ChatContainer
              currentUser={currentUser}
              currentChat={currentChat}
            />
          ) : null}
        </Grid>
      </Grid>
    </StyledChatContainer>
  );
};

export default Chat;
