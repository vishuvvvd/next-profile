import { Box } from '@mui/material';

import Profile from './profile';
// import { getUserMeData } from '@/services/main/me';

const Home = ({ data }: { data: { imageUrl: string, bio: string, } }) => {
  // const data1 = await getUserMeData();

  return (
    <Box>
      <Profile data={data} />
    </Box>
  );
};

export default Home;
