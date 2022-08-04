import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 1,
          height: 628,
        },
      }}
    >
      <Paper elevation={0}>
        <Typography variant='h3' textAlign={'center'} marginTop='20px'>Hi, My Name is Halil.</Typography>
        <img src=''></img>
      </Paper>
      
    </Box>
  );
}