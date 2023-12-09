import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function UILoading() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress sx={{ color: 'white' }} />
    </Box>
  );
}