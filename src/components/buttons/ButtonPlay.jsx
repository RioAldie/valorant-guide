import { Box, Button } from '@mui/material';
import React from 'react';

const btndefault = {
  backgroundColor: '#fff',
  borderRadius: '1px',
  width: '120px',
  height: '30px',
  fontSize: '18px',
  fontWeight: '600',
  color: '#000',
  '&:hover': {
    color: '#fff',
    bgcolor: '#ff4655',
    width: '125px',
    height: '36px',
  },
};
const boxdefault = {
  p: 1,
  border: 'solid 1px #fff',
  transition: ' 0.6s',
  '&:hover': {
    bgcolor: '#ff4655',
    p: 0,
    border: 'none',
  },
};
const ButtonPlay = () => {
  return (
    <Box sx={boxdefault}>
      {' '}
      <Button sx={btndefault}>Play</Button>
    </Box>
  );
};

export default ButtonPlay;
