import { Grid } from '@mui/material';
import { isEmpty } from 'lodash';

import GoogleMapEmbed from '@/components/commmon/google-map';
import ContactForm from '@/components/contact-form';
import HireMe from '@/components/hire-me';
import AppLayoutWrapper from '@/components/layout-wrapper';
import { getServerLocaleRevalidate } from '@/helpers/server-utils';
import { getUserMeData } from '@/services/main/me';
import { Address, Me, Meta } from '@/types/me';

export default async function ContectPage() {
  const { locale, revalidate } = await getServerLocaleRevalidate();
  const data: Me = await getUserMeData({ revalidate, locale });
  const { addresses = [], imageUrl = '' } = data;
  const { meta }: Address | { meta: Meta } = addresses.find(d => d.current) || { meta: { lat: 1, 'long': 1 } };

  return (
    <AppLayoutWrapper>
      <Grid container spacing={3} pb={4}>
        <Grid size={12} justifyItems={'center'}>
          <HireMe profileUrl={imageUrl} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} >
          <ContactForm />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          {!isEmpty(meta) && <GoogleMapEmbed lat={meta?.lat} lng={meta.long} />}
        </Grid>
      </Grid>
    </AppLayoutWrapper >
  );
}
