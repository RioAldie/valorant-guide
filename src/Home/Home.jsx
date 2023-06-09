import { Box, Button, Grid, styled, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LayoutHome from '../components/layout/layout.home';
import '../styles/global.css';

const ButtonPrimary = styled(Button)({
  backgroundColor: '#fff',
  borderRadius: '1px',
  width: '300px',
  height: '60px',
  fontSize: '18px',
  fontWeight: '600',
  color: '#000',
  '&:hover': {
    color: '#fff',
  },
});

const Home = () => {
  const getDataFromAPI = async () => {
    const data = await axios
      .get('https://valorant-api.com/v1/agents')
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(data);
  };

  useEffect(() => {
    let isChange = false;
    if (isChange === false) {
      getDataFromAPI();
    }
    return () => (isChange = true);
  }, []);

  return (
    <LayoutHome>
      <Grid
        item
        sx={{
          width: '100%',
          height: '100vh',
          paddingX: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#0F1823',
        }}>
        <div className="decor-1"></div>
        <div className="decor-2"></div>
        <div className="decor-cube cube-1"></div>
        <div className="decor-cube cube-2"></div>
        <div className="decor-3"></div>
        <div className="decor-cube cube-3"></div>
        <div className="decor-cube cube-4"></div>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '30px',
          }}>
          <Box sx={{ height: '38px' }}>
            <Typography
              sx={{
                fontSize: '24px',
                fontWeight: '700',
                lineHeight: '36px',
                color: '#ff4655',
                fontFamily: 'Oswald',
              }}>
              \\ Be a Pro With Us
            </Typography>
          </Box>
          <Box
            sx={{
              width: '700px',
              height: '140px',
            }}>
            <Typography
              sx={{
                fontSize: '32px',
                fontWeight: '100',
                lineHeight: '46px',
                color: '#fff',
                fontFamily: 'Noto Sans',
              }}>
              This Valorant Guideline will make you more understanding
              the game and make you to become Monster in this game
            </Typography>
          </Box>
          <Box
            sx={{
              border: 'solid 1px #fff',
              width: '320px',
              height: '70px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transition: ' 0.8s',
              '&:hover': {
                p: 0,
                border: 'none',
              },
              mt: '10px',
            }}>
            <Button
              sx={{
                width: '300px',
                height: '50px',
                fontWeight: '700',
                color: '#fff',
                bgcolor: '#ff4655',
                transition: ' 0.6s',
                borderRadius: '0',
                '&:hover': {
                  bgcolor: '#fff',
                  color: '#000',
                },
              }}>
              START
            </Button>
          </Box>
        </Box>
        <Box sx={{ mt: '15px' }}>
          <img src="/images/vlr-thumbnail.png" alt="" />
        </Box>
      </Grid>
    </LayoutHome>
  );
};

export default Home;
