import * as React from 'react';

import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTranslations } from 'next-intl';

import { footer, footerBouncingBlock } from '@/assets/styles';
import { backEndTechnologiesBouncingBlock, fontEndTechnologiesBouncingBlock } from '@/constants';

import SocialMedia from './social-media';
import BouncingBlock from '../commmon/bouncing-block';

function AppFooter() {
  const t = useTranslations('FOOTER');

  return (
    <Grid sx={footer} height={1} container justifySelf={'center'} alignItems={'center'}>
      <Grid size={12}>
        <Typography className='footer-message-one'>
          <strong className='code-strong-text'>{'</> '}</strong> {t('WITH') + ' '}
          <span className='heart-symbol'>
            {t('HEART')}
          </span>
        </Typography>
      </Grid>
      <Grid size={12}>
        <Typography className='footer-message-two'>
          {t('NOTE')}
        </Typography>
      </Grid>
      <Grid size={12}>
        <SocialMedia />
      </Grid>
      <Grid sx={footerBouncingBlock}>
        <BouncingBlock data={fontEndTechnologiesBouncingBlock} />
      </Grid>
      <Grid sx={footerBouncingBlock} size='grow' />
      <Grid sx={footerBouncingBlock}>
        <BouncingBlock data={backEndTechnologiesBouncingBlock} />
      </Grid>
    </Grid>
  );
}
export default AppFooter;
