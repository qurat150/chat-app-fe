import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StyledMessageBox = styled(Box)(({ fromself }) => ({
  minWidth: '35%',
  padding: '10px',
  marginBottom: '10px',
  backgroundColor: fromself ? '#DCF8C6' : '#F0F0F0',
  borderRadius: '10px',
  color: 'black',
}));
