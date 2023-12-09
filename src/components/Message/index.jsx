import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { StyledMessageBox } from './ui';
import { FlexBox } from 'styles';

const Message = ({ messages }) => {
  return (
    <>
      {messages.map((message, i) => {
        console.log(message);
        return (
          <FlexBox
            key={i}
            justifyContent={message.fromSelf ? 'flex-end' : 'flex-start'}
          >
            <StyledMessageBox fromself={message.fromSelf}>
              {message.message}
            </StyledMessageBox>
          </FlexBox>
        );
      })}
    </>
  );
};

export default Message;

Message.propTypes = {
  messages: PropTypes.array,
};
