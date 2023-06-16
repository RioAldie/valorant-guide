import React, { useEffect, useState } from 'react';
import LayoutHome from './components/layout/layout.home';
import { Box, Grid } from '@mui/material';
import axios from 'axios';
import SlideSkin from './components/SlideSkin';
import WeaponCard from './components/WeaponCard';
import WeaponSidebar from './components/Weapon.sidebar';
import WeaponDetail from './components/Weapon.detail';
import Loading from './components/Loading';
import Error from './components/Error';
import Helper from './components/Helper';

const info = {
  title: 'Arsenal',
  content: '',
};
const WeaponPage = () => {
  const [dataWeapons, setDataWeapons] = useState();
  const [weaponActive, setWeaponActive] = useState(
    '63e6c2b6-4a8e-869c-3d4c-e38355226584'
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [skin, setSkin] = useState();
  const getDataFromAPI = async () => {
    setIsLoading(true);
    const data = await axios
      .get('https://valorant-api.com/v1/weapons')
      .then((res) => {
        return res.data;
      })
      .finally(() => setIsLoading(false))
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
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
        {isLoading && <Loading />}
        {isError && <Error />}
        {!isLoading && !isError && dataWeapons !== undefined && (
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
                      {weapon.displayName != 'Melee' && (
                        <WeaponDetail props={weapon} />
                      )}
                      <WeaponCard
                        image={weapon.displayIcon}
                        skin={skin}
                      />{' '}
                      <SlideSkin data={weapon} setSkin={setSkin} />
                      <Helper
                        title={info.title}
                        content={info.content}
                      />
                    </>
                  );
              })}
            </Grid>
          </>
        )}{' '}
      </Grid>{' '}
    </LayoutHome>
  );
};

export default WeaponPage;
