import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { StyledMessageBox } from './ui';
import { FlexBox } from 'styles';
import { Typography } from '@mui/material';

const Message = ({ messages }) => {
  return (
    <>
      {messages.map((message, i) => {
        const timeStamp = message.timeStamp;

        const date = new Date(timeStamp);
        const twelveHourFormatTime = date.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        });
        return (
          <FlexBox
            key={i}
            justifyContent={message.fromSelf ? 'flex-end' : 'flex-start'}
          >
            <StyledMessageBox key={uuidv4()} fromself={message.fromSelf}>
              {message.message}
              <Typography
                variant="caption"
                sx={{
                  marginLeft: '5px',
                  fontSize: '10px',
                }}
              >
                {twelveHourFormatTime}
              </Typography>
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
