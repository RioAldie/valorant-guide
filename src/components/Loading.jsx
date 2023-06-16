import { Box, CircularProgress, Modal } from '@mui/material';

const style = {
  position: 'absolute',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};
const Loading = () => {
  return (
    <Box sx={style}>
      <CircularProgress sx={{ color: '#FF0032' }} />
    </Box>
  );
};

export default Loading;
