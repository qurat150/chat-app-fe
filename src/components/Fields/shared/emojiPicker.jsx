import PropTypes from 'prop-types';
import Picker from 'emoji-picker-react';

const EmojiPicker = ({ onEmojiClick }) => {
  return <Picker onEmojiClick={onEmojiClick} />;
};

export default EmojiPicker;

EmojiPicker.propTypes = {
  onEmojiClick: PropTypes.any,
};
