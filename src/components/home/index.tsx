import { Box } from '@mui/material';

import { getUserMeData } from '@/services/main/me';

import Profile from './profile';

const Home = async () => {
  const data = await getUserMeData({});
  return (
    <Box>
      <Profile data={data} />
    </Box>
  );
};

export default Home;
