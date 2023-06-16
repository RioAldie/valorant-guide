import { Box, Typography } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';

const Footer = () => {
  return (
    <Box
      bgcolor={'primary'}
      sx={{
        width: '100%',
        height: '300px',
        bgcolor: '#0F1823',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderTop: '#fff solid 5px',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: '200px',
        }}>
        <img
          src="/images/logo-2-vlr.png"
          width={100}
          height={40}
          alt=""
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '300px',
            height: '50px',
            color: '#fff',
          }}>
          <Typography>About</Typography>
          <Typography>Docs</Typography>
          <Typography>Contacts</Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          color: '#fff',
          width: '100%',
          marginBottom: '30px',
          marginTop: '20px',
          textAlign: 'center',
        }}>
        © 2023 Copyright Riot Games, Valorant
      </Typography>
    </Box>
  );
};

export default Footer;
