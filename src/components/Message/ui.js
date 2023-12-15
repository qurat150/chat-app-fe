import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StyledMessageBox = styled(Box)(({ fromself }) => ({
  maxWidth: '35%',
  padding: '10px',
  marginBottom: '10px',
  minHeight: 'auto',
  margin: '0 10px 10px 10px',
  maxHeight: 'none',
  overflow: 'auto',
  backgroundColor: fromself ? '#DCF8C6' : '#F0F0F0',
  borderRadius: '10px',
  color: 'black',
  wordWrap: 'break-word',
}));
