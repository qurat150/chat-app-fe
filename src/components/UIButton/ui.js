import styled from '@emotion/styled';
import Button, { buttonClasses } from '@mui/material/Button';

export const UIStyledButton = styled(Button)(({ bgcolor }) => ({
  [`&.${buttonClasses.root}`]: {
    backgroundColor: bgcolor ? bgcolor : '#0f171e',
    textTransform: 'inherit',
    fontSize: '15px',
    letterSpacing: '1px',
    // '&:hover': {
    //   backgroundColor: '#0c1218',
    // },
  },
}));
