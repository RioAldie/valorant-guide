import { Box, Button } from '@mui/material';
import MapDetail from './MapDetail';
import { useState } from 'react';

const MapCard = (props) => {
  const { image, detail } = props;
  const [isDetail, setIsDetail] = useState(false);
  return (
    <>
      <Box
        sx={{
          width: '1000px',
          height: '565px',
          border: 'solid 2px #FF4655',
        }}>
        <img
          src={image}
          style={{
            marginLeft: '30px',
            marginTop: '-30px',
          }}
          alt=""
          width={1000}
          height={565}
        />
        <div className="wm">
          <img
            src="/images/vlrg-logo-blck.png"
            alt=""
            width={76}
            height={26}
          />
        </div>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          mt: '30px',
        }}>
        <Button
          variant="outlined"
          onClick={() => setIsDetail(!isDetail)}>
          detail
        </Button>
      </Box>
      <MapDetail
        detail={detail}
        isDetail={isDetail}
        setIsDetail={setIsDetail}
      />
    </>
  );
};

export default MapCard;
