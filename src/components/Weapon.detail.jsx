import { Box } from '@mui/material';

const WeaponDetail = ({ props }) => {
  const { magazineSize, fireRate, reloadTimeSeconds } =
    props.weaponStats;

  const { cost } = props.shopData;
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '150px',
        width: '1000px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '20px',
        height: '100px',
        alignItems: 'center',
      }}>
      <div className="weapon-stat-bg">
        <div className="weapon-stat">
          <p>Ammo</p>
          <h5>{magazineSize}</h5>
        </div>{' '}
      </div>
      <div className="weapon-cube"></div>
      <div className="weapon-stat-bg">
        <div className="weapon-stat">
          <p>Cost</p>
          <h5>{cost}</h5>
        </div>{' '}
      </div>
      <div className="weapon-cube"></div>
      <div className="weapon-stat-bg">
        <div className="weapon-stat">
          <p>Reload</p>
          <h5> {reloadTimeSeconds}</h5>
        </div>{' '}
      </div>
      <div className="weapon-cube"></div>
      <div className="weapon-stat-bg">
        <div className="weapon-stat">
          <p>Fire-rate</p>
          <h5>{fireRate}</h5>
        </div>{' '}
      </div>
    </Box>
  );
};

export default WeaponDetail;
