import {
  Box,
  Button,
  styled,
  Typography,
  Tabs,
  Tab,
} from '@mui/material';
import React from 'react';

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

const WeaponSidebar = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSkin(undefined);
  };
  const { agents, setAgent, setSkin } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'fixed',
        top: '60px',
      }}>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'none',
          display: 'flex',
          maxHeight: '90vh',
        }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: 'divider',
            color: '#fff',
          }}>
          {agents.map((agent, i) => {
            return (
              <Tab
                key={i}
                onClick={() => setAgent(agent.uuid)}
                label={agent.displayName}
                sx={AgentBar}
              />
            );
          })}
        </Tabs>
      </Box>
    </Box>
  );
};

export default WeaponSidebar;
