import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

import { ChatItem, Message, SendMessageInputField } from 'components';
import { getMessages, sendMessage } from 'apis/messages';
import { appSocket } from 'services/socket';

const ChatContainer = ({ currentChat, currentUser }) => {
  const [messages, setMessages] = useState([]);

  const updateLocalMessage = (data, fromSelf = false) => {
    const receivedMessageObj = { fromSelf, message: data.message };
    setMessages((prev) => [...prev, receivedMessageObj]);
  };

  useEffect(() => {
    console.log('use effect running');
    const smth = async () => {
      const res = await getMessages({
        from: currentUser._id,
        to: currentChat._id,
      });
      console.log(res.data);
      setMessages(res.data);
    };
    appSocket.onRecieveMessage(updateLocalMessage);
    smth();
  }, [currentChat, currentUser._id]);

  const handleMessageSend = async (message) => {
    const sendMessageResponse = await sendMessage({
      to: currentChat._id,
      from: currentUser._id,
      message,
    });
    if (sendMessageResponse.status == 200) {
      updateLocalMessage(sendMessageResponse.data, true);
      appSocket.sendMessage(sendMessageResponse.data); // Optionally send the message over the socket
      console.log(sendMessageResponse.data);
    }

    // console.log(sendMessageResponse);
  };

  return (
    <Box sx={{ height: '645px' }}>
      <div style={{ height: '8%', marginBottom: '20px' }}>
        <ChatItem chat={currentChat} chatWindow />
      </div>
      <div style={{ height: '82%' }}>
        <Message messages={messages} />
      </div>
      <div style={{ height: '10%' }}>
        <SendMessageInputField handleMessageSend={handleMessageSend} />
      </div>
    </Box>
  );
};

export default ChatContainer;

ChatContainer.propTypes = {
  currentChat: PropTypes.any,
  currentUser: PropTypes.any,
};
