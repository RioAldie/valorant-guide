import { Box, Button, Grid, Typography } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import LayoutHome from './components/layout/layout.home';
import { Link } from 'react-router-dom';

const EsportPage = () => {
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
        <Box
          color={'#ff4655'}
          sx={{
            width: '600px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '250px',
            flexDirection: 'column',
            border: 'solid 1px red',
            gap: '20px',
          }}>
          <WarningAmberIcon
            sx={{
              width: '80px',
              height: '80px',
              color: '#ff4655',
            }}
          />
          <Typography>This fitur is still on proggress</Typography>
          <Link to={'/'}>
            <Button variant="contained">Back to Home</Button>
          </Link>
        </Box>
      </Grid>
    </LayoutHome>
  );
};

export default EsportPage;
