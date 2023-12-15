import styled from '@emotion/styled';
import Box from '@mui/material/Box';

export const StyledGrid = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
  backgroundColor: '#0f171e',
});

export const FormCotainer = styled(Box)(({ theme }) => ({
  maxWidth: 400,
  margin: '0 30px',
  backgroundColor: '#1a242f',
  padding: theme.spacing(2),
  boxShadow: theme.shadows[3],
  borderRadius: 8,
}));
