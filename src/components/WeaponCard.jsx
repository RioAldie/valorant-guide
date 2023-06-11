import { Box } from '@mui/material';

const WeaponCard = (props) => {
  const { image, skin } = props;
  return (
    <Box
      sx={{
        width: '1000px',
        height: '300px',
        bgcolor: '#FF4655',
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
        }}>
        <img
          src={skin != undefined ? skin : image}
          alt=""
          width={800}
          height={200}
        />
      </Box>
    </Box>
  );
};

export default WeaponCard;
