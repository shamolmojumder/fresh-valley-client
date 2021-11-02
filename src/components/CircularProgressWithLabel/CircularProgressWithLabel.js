import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function CircularProgressWithLabel() {
  return (
    <Box style={{justifyContent:'center',marginTop:'200px'}} sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>
  )
}

export default CircularProgressWithLabel;