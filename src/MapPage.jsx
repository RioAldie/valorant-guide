import { Box, Grid } from '@mui/material';
import LayoutHome from './components/layout/layout.home';
import AgentsSidebar from './Agents/Agents.sidebar';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import MapCard from './components/MapCard';
import MapDetail from './components/MapDetail';

const MapPage = () => {
  const [dataMaps, setDataMaps] = useState();
  const [mapActive, setMapActive] = useState(
    '7eaecc1b-4337-bbf6-6ab9-04b8f06b3319'
  );
  const getDataFromAPI = async () => {
    const data = await axios
      .get('https://valorant-api.com/v1/maps')
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    return setDataMaps(data.data);
  };

  useEffect(() => {
    let isChange = false;
    if (isChange === false) {
      getDataFromAPI();
    }
    return () => (isChange = true);
  }, []);

  return (
    <LayoutHome>
      <Grid
        item
        sx={{
          width: '100%',
          height: '120vh',
          paddingX: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#0F1823',
        }}>
        {dataMaps != undefined ? (
          <>
            <Grid item xs={12} md={3}>
              <AgentsSidebar
                agents={dataMaps}
                setAgent={setMapActive}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              {dataMaps.map((map) => {
                if (mapActive === map.uuid) {
                  return (
                    <MapCard
                      image={map.splash}
                      detail={map.displayIcon}
                    />
                  );
                }
              })}
            </Grid>
          </>
        ) : (
          <p>Error</p>
        )}
      </Grid>
    </LayoutHome>
  );
};

export default MapPage;
