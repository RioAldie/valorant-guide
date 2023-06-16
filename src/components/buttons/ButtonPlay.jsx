import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const btndefault = {
  backgroundColor: '#ff4655',
  borderRadius: '1px',
  width: '120px',
  height: '30px',
  fontSize: '12px',
  fontWeight: '600',
  color: '#fff',
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
    <Link to={'/agents'}>
      <Box sx={boxdefault}>
        {' '}
        <Button sx={btndefault}>start</Button>
      </Box>
    </Link>
  );
};

export default ButtonPlay;
