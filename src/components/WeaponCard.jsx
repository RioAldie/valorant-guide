import { Box } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';

const WeaponCard = (props) => {
  const { image, skin } = props;
  return (
    <Box
      sx={{
        width: '1000px',
        height: '300px',
        bgcolor: '#FF4655',
        marginTop: '100px',
      }}>
      <Box
        sx={{
          width: '1000px',
          height: '300px',
          borderRight: 'solid 3px #ECE8E1',
          borderBottom: 'solid 3px #ECE8E1',
          bgcolor: '#0F1823',
          mt: '-10px',
          ml: '-10px',
          position: 'absolute',
          zIndex: '10',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <img
          src={skin != undefined ? skin : image}
          alt=""
          style={{ zIndex: '1000' }}
        />
      </Box>
    </Box>
  );
};

export default WeaponCard;
