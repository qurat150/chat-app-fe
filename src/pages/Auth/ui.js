import styled from '@emotion/styled';
import { JoinFull } from '@mui/icons-material';
import Box from '@mui/material/Box';

export const StyledGrid = styled(Box)({
  width: '100%',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#0f171e',
});

export const FormCotainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 400,
  margin: 'auto',
  backgroundColor: '#1a242f',
  padding: theme.spacing(2),
  boxShadow: theme.shadows[3],
  borderRadius: 8,
}));
