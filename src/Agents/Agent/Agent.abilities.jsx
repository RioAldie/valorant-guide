import { Box, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const abilitiStyle = {
    width:'100px',
    height:'100px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    bgcolor:'#000',
    cursor:'pointer'
}
const abilitiActive = {
    bgcolor:"#ff4655",
    width:'100px',
    height:'100px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    cursor:'pointer'
}
const AgentAbilities = (props) => {
    const {agentId} = props;
    const [abilities,setAbilities] = useState([]);
    const [ability, setAbility] = useState([])
    const [active, setActive] = useState('');

    const getAgentFromAPI = () =>{
        axios.get(`https://valorant-api.com/v1/agents/${agentId}`).then((res) => {
            setAbilities(res.data.data.abilities);
        });
    }
    useEffect(() =>{
        let isChange = false;
        if(isChange === false){
            getAgentFromAPI();
            
        }
        return(
            () => isChange = true
        )
        
    },[agentId]);

    const handleUpdateAbility = (abiliti) =>{
        setActive(abiliti.slot);
        setAbility(abiliti);
    }
    
  return (
    <Box sx={{
        marginTop:'200px',
        marginLeft:'100px'
    }}>
        <Typography variant='h3' sx={{
            fontWeight:'bold'
        }}>
            SPECIAL ABILITIES
        </Typography>
        <Box sx={{
            display:'flex',
            flexDirection:'row',
            width:'500px',
            justifyContent:'space-between',
            marginTop:'20px'
        }}>
            {
                abilities.map((abiliti,i) =>{
                    return(
                        <Box key={i} onClick={(e) => handleUpdateAbility(abiliti)}  sx={abiliti.slot === active ? abilitiActive : abilitiStyle }>
                            <img src={abiliti.displayIcon} alt="" width={60}/>
                        </Box>
                    )
                })
            }
        </Box>
        <Box sx={{
            width:'500px',
            height:'350px',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-evenly'
        }}>
            <Typography sx={{
                fontSize:'36px',
                fontWeight:'600',
                fontFamily:'roboto',
                color:'#000'
            }}>{ability.displayName}</Typography>
            <Typography sx={{
                fontSize:'26px',
                fontWeight:'500',
                fontFamily:'roboto',
                color:'#000'
            }}>{ability.description}</Typography>
        </Box>
    </Box>
  )
}

export default AgentAbilities;