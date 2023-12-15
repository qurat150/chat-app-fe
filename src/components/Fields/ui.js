import styled from '@emotion/styled';
import TextField, { textFieldClasses } from '@mui/material/TextField';

export const StyledTextField = styled(TextField)({
  [`&.${textFieldClasses.root}`]: {
    border: '1px solid #0f171e',
    borderRadius: '5px',
    marginBottom: '15px',
    backgroundColor: 'transparent',
    '&:focus': {
      border: '1px solid yellow',
    },
  },
});

export const SendMessageInput = styled(TextField)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(2),
  border: '2px solid #373737bf',
  borderRadius: theme.spacing(2),
}));
