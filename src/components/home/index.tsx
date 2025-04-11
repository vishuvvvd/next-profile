import { Grid } from '@mui/material';

import { getServerLocaleRevalidate } from '@/helpers/server-utils';
import { getUserMeData } from '@/services/main/me';

import Profile from './profile';

const Home = async () => {
  const { locale, revalidate } = await getServerLocaleRevalidate();
  const data = await getUserMeData({ revalidate, locale });
  return (
    <Grid container>
      <Grid size={12}>
        <Profile data={data} />
      </Grid>
      <Grid size={6}>

      </Grid>
    </Grid>
  );
};

export default Home;
