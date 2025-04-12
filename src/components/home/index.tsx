import { Grid } from '@mui/material';
import { headers } from 'next/headers';

import { logger } from '@/helpers/logger';
import { getServerLocaleRevalidate } from '@/helpers/server-utils';
import { getUserMeData } from '@/services/main/me';

import Profile from './profile';

const Home = async () => {
  const allHeaders = await headers();
  const { locale, revalidate, hostUrl } = await getServerLocaleRevalidate();

  for (const [key, value] of allHeaders.entries()) {
    logger.info(
      JSON.stringify({
        key: key,
        value: value,
      })
    );
  }
  logger.info(
    JSON.stringify({
      message: 'API HOST',
      hostUrl: hostUrl,
    })
  );
  const data = await getUserMeData({ revalidate, locale, hostUrl });

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
