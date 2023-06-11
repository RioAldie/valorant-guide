import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';

const AgentBar = {
  minWidth: '300px',
  minHeight: '50px',
  border: 'none',
  fontSize: '24px',
  fontWeight: 'bold',
  background: 'none',
  color: '#fff',
  textAlign: 'left',
  fontFamily: 'roboto',
  cursor: 'pointer',
  marginTop: '20px',
};
const SlideSkin = (props) => {
  const { data, setSkin } = props;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'fixed',
        top: '650px',
      }}>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'none',
          display: 'flex',
          maxHeight: '90vh',
          maxWidth: '1000px',
          width: '1000px',
        }}>
        <Tabs
          variant="scrollable"
          value={value}
          onChange={handleChange}
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          sx={{ color: '#fff' }}>
          {data.skins.map((skin, i) => {
            return (
              <Tab
                key={i}
                onClick={() => setSkin(skin.displayIcon)}
                label={skin.displayName}
                sx={{ color: '#fff' }}
              />
            );
          })}
        </Tabs>
      </Box>
    </Box>
  );
};

export default SlideSkin;
