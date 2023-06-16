import { Box, Button, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';

const Helper = (props) => {
  const [active, setActive] = useState(false);
  const { title, content } = props;
  return (
    <>
      <Button
        onClick={() => setActive(!active)}
        variant="outlined"
        color="inherit"
        sx={{
          width: '50px',
          height: '50px',
          color: '#bfbfbf',
          position: 'fixed',
          right: '50px',
          bottom: '50px',
          zIndex: '1000000',
        }}
        className="btn-help">
        <InfoIcon sx={{ width: '34px', height: '34px' }} />
      </Button>
      {active && (
        <Box
          onClick={() => setActive(false)}
          sx={{
            width: '300px',
            height: '200px',
            bgcolor: '#00000056',
            border: 'solid 1px #fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: '400px',
            zIndex: '1000000',
            right: '150px',
            color: '#fff',
            p: '20px',
          }}
          className="help-box">
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">{content}</Typography>
        </Box>
      )}
    </>
  );
};

export default Helper;
