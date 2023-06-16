import { Grid } from '@mui/material';
import React from 'react';
import Navbar from '../ui/appbar/navbar';
import Footer from './Footer';

const LayoutHome = ({ children }) => {
  return (
    <>
      <Navbar />
      <Grid
        container
        spacing={2}
        mt={5}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {children}
      </Grid>
    </>
  );
};

export default LayoutHome;
