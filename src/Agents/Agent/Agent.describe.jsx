import { Box, Typography } from '@mui/material'
import { height } from '@mui/system'
import React from 'react'

const AgentDescribe = ({role, desc}) => {
  return (
    <Box sx={{marginTop:'100px',color:'#fff'}}>
            <Typography variant='h6'>
               { `// ROLE`}
            </Typography>
            <Box sx={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                minWidth:'400px',
                height:'100px',
                fontSize:'64px',
                fontFamily:'roboto',
                justifyContent:'space-evenly',
                textTransform:'uppercase'
                }}>
                    {role.displayName} 
                <img src={role.displayIcon} alt="" width={80} />
            </Box>
            <Typography variant='h6'>
               { `// BIOGRAPHY`}
            </Typography>
            <Typography variant='h6' width={400} marginTop={2}>
               {desc}
            </Typography>
    </Box>
  )
}

export default AgentDescribe