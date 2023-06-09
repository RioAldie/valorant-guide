import { Box, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/ui/appbar/navbar';
import AgentAbilities from './Agent/Agent.abilities';
import AgentsItem from './Agents.item';
import AgentsSidebar from './Agents.sidebar';

const ListAgents = () => {
  const [agents, setAgents] =  useState([]);
  const [agentActive, setAgentActive] = useState('bb2a4828-46eb-8cd1-e765-15848195d751');

  const getDataFromAPI = async () =>{
    const data = await axios.get('https://valorant-api.com/v1/agents')
    .then((res) => {return res.data})
    .catch((err) =>{
      console.log(err)
    })

    return setAgents(data.data);
  }
 
  useEffect(()=>{
    let isChange = false;
    if(isChange === false){
      getDataFromAPI()
    }
    return () => isChange = true;
  },[])

  return (
    <>
      <Navbar/>
      <Grid container spacing={2} mt={5} sx={{display:'flex',flexDirection:{ xs:'column', md:'row'}, bgcolor:'#0f1823',width:'100vw', overflow:'hidden'}}>
        <Grid item xs={12} md={3}>
          <AgentsSidebar agents={agents} setAgent={setAgentActive}/>
        </Grid>
        <Grid item xs={12} md={9}>
          {
            agents.map((agent,i) =>{
              return(
              agent.uuid === agentActive ? <AgentsItem key={i} agent={agent}/> : null
              )
            })
          }
          
        </Grid>
        <Grid item xs={12} spacing={5} md={12} bgcolor="#ece8e1" sx={{
          height:'100vh',
          zIndex:'1000',
        }}>
          <AgentAbilities agentId={agentActive}/>
        </Grid>
      </Grid>

    </>

  )
}

export default ListAgents;