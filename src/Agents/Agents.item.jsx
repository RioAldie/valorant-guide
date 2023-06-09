import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AgentDescribe from './Agent/Agent.describe';

const AgentsItem = ({agent}) => {
   
    console.log(agent)
  return (
    <Box sx={{ bgcolor:'#0f1823',height:'100vh',display:'flex',flexDirection:'row'}}>
        <Box sx={{
            position:'absolute',
            marginTop:'50px',
            marginLeft:'100px',
            zIndex:'10000'}}>
            <img src={agent.fullPortraitV2} alt="" width={1000}/>
        </Box>
        <AgentDescribe role={agent.role} desc={agent.description}/>
    </Box>
    
  )
}

export default AgentsItem