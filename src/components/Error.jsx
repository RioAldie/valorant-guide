import { Box, Button, Typography } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const Error = () => {
  return (
    <Box
      color={'red'}
      sx={{
        width: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
        flexDirection: 'column',
        border: 'solid 1px red',
      }}>
      <WarningAmberIcon
        sx={{
          width: '80px',
          height: '80px',
          color: 'red',
        }}
      />
      <Typography>There is an error with your connection!</Typography>
    </Box>
  );
};

export default Error;
