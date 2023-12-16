import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

import { getMessages, sendMessage } from 'apis/messages';
import { appSocket } from 'services/socket';
import { ChatItem, Message, SendMessageInputField } from 'components';
import 'customScrollBar.css';

const ChatContainer = ({ currentChat, clearSelectedChat }) => {
  const { currentUser } = useSelector((state) => state.auth);
  console.log(currentUser);
  const scrollRef = useRef();

  const element = scrollRef.current;
  const [messages, setMessages] = useState([]);

  const updateLocalMessage = (data, fromSelf = false) => {
    const receivedMessageObj = { fromSelf, message: data.message };
    setMessages((prev) => [...prev, receivedMessageObj]);
  };

  useEffect(() => {
    const fetchedMessages = async () => {
      const payload = {
        from: currentUser.user._id,
        to: currentChat._id,
      };
      const res = await getMessages(payload);
      setMessages(res.data);
    };
    appSocket.onRecieveMessage(updateLocalMessage);
    fetchedMessages();
  }, [currentChat, currentUser.user._id]);

  const handleMessageSend = async (message) => {
    const sendMessageResponse = await sendMessage({
      to: currentChat._id,
      from: currentUser.user._id,
      message,
    });
    if (sendMessageResponse.status == 200) {
      updateLocalMessage(sendMessageResponse.data, true);
      appSocket.sendMessage(sendMessageResponse.data);
    }
  };

  useEffect(() => {
    if (element) {
      const scrollHeight = element.scrollHeight;
      element.scroll({ behaviour: 'smooth', top: scrollHeight });
    }
  }, [messages, element]);

  return (
    <Box sx={{ height: '100vh' }}>
      <div style={{ height: '8vh', marginBottom: '20px' }}>
        <ChatItem
          clearSelectedChat={clearSelectedChat}
          chat={currentChat}
          chatWindow
        />
      </div>
      <div ref={scrollRef} style={{ height: '72vh', overflow: 'auto' }}>
        <Message messages={messages} />
      </div>
      <div>
        <SendMessageInputField handleMessageSend={handleMessageSend} />
      </div>
    </Box>
  );
};

export default ChatContainer;

ChatContainer.propTypes = {
  currentChat: PropTypes.object,
  clearSelectedChat: PropTypes.func,
};
