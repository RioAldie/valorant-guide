import { Grid } from '@mui/material';
import LayoutHome from './components/layout/layout.home';
import AgentsSidebar from './Agents/Agents.sidebar';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import MapCard from './components/MapCard';
import Loading from './components/Loading';
import Error from './components/Error';
import Helper from './components/Helper';

const info = {
  title: 'Map',
  content:
    'Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular plays, and clutch moments. Make the play others will imitate for years to come.',
};
const MapPage = () => {
  const [dataMaps, setDataMaps] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [mapActive, setMapActive] = useState(
    '7eaecc1b-4337-bbf6-6ab9-04b8f06b3319'
  );
  const getDataFromAPI = async () => {
    setIsLoading(true);
    const data = await axios
      .get('https://valorant-api.com/v1/maps')
      .then((res) => {
        return res.data;
      })
      .finally(() => setIsLoading(false))
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
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
      {' '}
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
        {isLoading && <Loading />}
        {isError && <Error />}
        {!isLoading && !isError && dataMaps !== undefined && (
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
        )}
      </Grid>
      <Helper title={info.title} content={info.content} />
    </LayoutHome>
  );
};

export default MapPage;
