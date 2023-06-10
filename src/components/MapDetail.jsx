import { Button } from '@mui/material';
const MapDetail = (props) => {
  const { detail, isDetail, setIsDetail } = props;

  return (
    <div
      className={
        isDetail ? 'map-detail map-active' : 'map-detail map-inactive'
      }>
      <img src={detail} alt="" width={500} height={500} />
      <Button
        className="btn-x"
        variant="contained"
        sx={{
          position: 'absolute',
        }}
        onClick={() => setIsDetail(!isDetail)}>
        X
      </Button>
    </div>
  );
};

export default MapDetail;
