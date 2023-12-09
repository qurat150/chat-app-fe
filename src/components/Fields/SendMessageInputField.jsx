import React, { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import styled from '@emotion/styled';
import { InputAdornment } from '@mui/material';
import Picker from 'emoji-picker-react';
import { FaRegSmile } from 'react-icons/fa';

import PropTypes from 'prop-types';

const SendMessageInput = styled(TextField)(({ theme }) => ({
  width: 'calc(100% - 48px)', // Adjust the width to accommodate the icon
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(2),
    borderColor: 'white',
  },
}));

const SendMessageInputField = ({ handleMessageSend }) => {
  let scrollRef = useRef();

  const [showEmojiPalette, setShowEmojiPalette] = useState(false);
  const [message, setMessage] = useState('');

  const showEmojiPaletteHandler = () => {
    setShowEmojiPalette(!showEmojiPalette);
  };

  const handleClickEmoji = (event, emoji) => {
    // let msg = message;
    // msg += emojiObj.emoji;
    // setMessage(msg);
    console.log(emoji);
  };

  // useEffect(() => {
  //   scrollRef.current?.scrollIntoView({ behaviour: 'smooth' });
  // }, [message]);

  const sendChat = (event) => {
    event.preventDefault();
    if (message.length > 0) {
      handleMessageSend(message);
      setMessage(message);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      {showEmojiPalette && <Picker onEmojiClick={handleClickEmoji} />}
      <SendMessageInput
        placeholder="Message.."
        variant="outlined"
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            sendChat(event);
          }
        }}
        InputLabelProps={{
          style: { color: 'white' },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton aria-label="emoji" onClick={showEmojiPaletteHandler}>
                <FaRegSmile style={{ color: 'white' }} />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="send" onClick={sendChat}>
                <SendIcon style={{ color: 'white' }} />
              </IconButton>
            </InputAdornment>
          ),
          style: { color: 'white' },
        }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default SendMessageInputField;

SendMessageInputField.propTypes = {
  handleMessageSend: PropTypes.func,
};
