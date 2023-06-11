import React, { useEffect, useState } from 'react';
import LayoutHome from './components/layout/layout.home';
import { Box, Grid } from '@mui/material';
import axios from 'axios';
import AgentsSidebar from './Agents/Agents.sidebar';
import SlideSkin from './components/SlideSkin';
import WeaponCard from './components/WeaponCard';
import WeaponSidebar from './components/Weapon.sidebar';

const WeaponPage = () => {
  const [dataWeapons, setDataWeapons] = useState();
  const [weaponActive, setWeaponActive] = useState(
    '63e6c2b6-4a8e-869c-3d4c-e38355226584'
  );
  const [skin, setSkin] = useState();
  const getDataFromAPI = async () => {
    const data = await axios
      .get('https://valorant-api.com/v1/weapons')
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    return setDataWeapons(data.data);
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
          height: '100vh',
          paddingX: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#0F1823',
        }}>
        {dataWeapons != undefined ? (
          <>
            <Grid item xs={12} md={3}>
              <WeaponSidebar
                agents={dataWeapons}
                setAgent={setWeaponActive}
                setSkin={setSkin}
              />
            </Grid>{' '}
            <Grid item xs={12} md={9}>
              {dataWeapons.map((weapon) => {
                if (weapon.uuid === weaponActive)
                  return (
                    <>
                      <WeaponCard
                        image={weapon.displayIcon}
                        skin={skin}
                      />{' '}
                      <SlideSkin data={weapon} setSkin={setSkin} />
                    </>
                  );
              })}
            </Grid>
          </>
        ) : (
          <p>Data Kosong</p>
        )}
      </Grid>
    </LayoutHome>
  );
};

export default WeaponPage;
