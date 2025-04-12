import { Box } from '@mui/material';

import { googleMapConatiner } from '@/assets/styles';

const GoogleMapEmbed = ({ lat, lng }: { lat: number; lng: number }) => {
  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&hl=es;z=14&output=embed`;
  return (
    <Box height={1} my={2} sx={googleMapConatiner} >
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        src={mapSrc}
      />
    </Box >
  );
};

export default GoogleMapEmbed;
