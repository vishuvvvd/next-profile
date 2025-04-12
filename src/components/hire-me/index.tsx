import React from 'react';

import { Grid, Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';

import { hireMeProfileImage, hireMe, textCenter, text5 } from '@/assets/styles';
import { getServerLocaleRevalidate } from '@/helpers/server-utils';
import { getHireMeData } from '@/services/main/contact';

import CutomImage from '../commmon/next-image';

async function HireMe({ profileUrl }: { profileUrl: string }) {
  const t = await getTranslations('CONTACT_PAGE');

  const { locale, revalidate } = await getServerLocaleRevalidate();
  const { whyHireMe } = await getHireMeData({ locale, revalidate });
  return (
    <Grid container sx={hireMe} spacing={3}>
      <Grid size={12}>
        <Typography sx={{ ...textCenter, ...text5 }}>
          <strong>{t('HIRE_ME')}</strong>
        </Typography>
      </Grid>
      <Grid>
        <CutomImage src={profileUrl} alt='Profile Image' sx={hireMeProfileImage} />
      </Grid>
      <Grid size={'grow'}>
        <Typography>
          {whyHireMe.experience}
        </Typography>
        <Typography>
          {whyHireMe.teamPlayer}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default HireMe;
