import { useState } from 'react';
import PropTypes from 'prop-types';
import { InputAdornment, IconButton } from '@mui/material';
import { FaRegSmile } from 'react-icons/fa';
import SendIcon from '@mui/icons-material/Send';

import { SendMessageInput } from './ui';
import EmojiPicker from './shared/emojiPicker';

const SendMessageInputField = ({ handleMessageSend }) => {
  const [showEmojiPalette, setShowEmojiPalette] = useState(false);
  const [message, setMessage] = useState('');

  const toggleEmojiPalette = () => {
    setShowEmojiPalette(!showEmojiPalette);
  };

  const handleClickEmoji = (emojiObject) => {
    const { emoji } = emojiObject;
    setMessage((prevMessage) => prevMessage + emoji);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessageHandler(event);
    }
  };

  const sendMessageHandler = (event) => {
    event.preventDefault();
    if (message.length > 0) {
      handleMessageSend(message);
      setMessage('');
    }
  };

  return (
    <>
      {showEmojiPalette && <EmojiPicker onEmojiClick={handleClickEmoji} />}
      <div style={{ display: 'flex' }}>
        <SendMessageInput
          placeholder="Message.."
          variant="outlined"
          onKeyPress={handleKeyPress}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton aria-label="emoji" onClick={toggleEmojiPalette}>
                  <FaRegSmile style={{ color: 'white' }} />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="send" onClick={sendMessageHandler}>
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
    </>
  );
};

export default SendMessageInputField;

SendMessageInputField.propTypes = {
  handleMessageSend: PropTypes.func,
};
