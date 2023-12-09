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
