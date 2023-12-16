import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';

export const StyledProfilePicture = styled('img')(() => ({
  width: '60px',
  height: '60px',
  borderRadius: '36px',
}));

export const StyledBox = styled(Box)(({ chatWindow }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  marginTop: '20px',
  ...(chatWindow
    ? {}
    : {
        '&:hover': {
          backgroundColor: 'rgb(38, 38, 38)',
          borderRadius: '2px',
          transition: '.3s',
        },
      }),
}));

export const StyledGridContainer = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
});
