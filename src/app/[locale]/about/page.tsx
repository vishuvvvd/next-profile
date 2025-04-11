import { Box, Grid, Typography } from '@mui/material';
import { startCase } from 'lodash';
import { getTranslations } from 'next-intl/server';
import key from 'weak-key';

import { Recognition } from '@/assets/icons';
import { sectionHeader } from '@/assets/styles';
import { text5 } from '@/assets/styles';
import { aboutMeStyle, awardIcon, educationStyle, lightSubTitle } from '@/assets/styles/about';
import CutomImage from '@/components/commmon/next-image';
import EducationStepper from '@/components/education';
import AppLayoutWrapper from '@/components/layout-wrapper';
import KeyExperaince from '@/components/skills';
import { getServerLocaleRevalidate } from '@/helpers/server-utils';
import { getAboutMeData } from '@/services/main/about';
import { getEducationData } from '@/services/main/education';
import { Education, Profile } from '@/types/about';

export default async function AboutPage() {
  const t = await getTranslations('ABOUTPAGE');
  const { locale, revalidate } = await getServerLocaleRevalidate();
  const data: Profile = await getAboutMeData({ revalidate, locale });
  const edu: Education[] = await getEducationData({ revalidate, locale });
  const { aboutMe, journey } = data;
  return (
    <AppLayoutWrapper>
      <Grid container className='about-me-container' sx={aboutMeStyle}>
        <Grid size={12} container sx={educationStyle}>
          <EducationStepper data={edu} />
        </Grid>
        <Grid size={12}>
          <Typography className='intro'>{aboutMe?.intro}</Typography>
          <Typography className='previousExperience'>{aboutMe?.previousExperience}</Typography>
        </Grid>
        <Grid size={12} container spacing={2} className='awards'>
          <Grid size={12}>
            <Typography className='award-title'>{t('AWARDS')}</Typography>
          </Grid>
          {
            aboutMe.awards.map((data) => <Grid size={{ xs: 12, md: 6 }} key={key(data)} container className='award-block'>
              <Grid>
                <CutomImage
                  src={Recognition.src}
                  sx={awardIcon}
                />
              </Grid>
              <Grid pl={2} pt={.5} size='grow'>
                <Typography className='award'>
                  {data.award}
                </Typography>
                <Typography className='description'>
                  {data.description}
                </Typography>
              </Grid>
            </Grid>
            )
          }
        </Grid>
        <Grid size={12}>
          <KeyExperaince keyExperience={data.keyExperience} />
        </Grid>
        <Grid size={12}>
          <Typography mt={3} mb={1.5} sx={sectionHeader}>{t('JOURNEY')}</Typography>
        </Grid>
        <Grid size={12}>
          {Object.keys(journey).map((dt: string) => {
            const dtkey = dt as keyof typeof journey;
            return <Box key={key({ dt })}>
              <Typography sx={lightSubTitle}><strong>{startCase(dt) + ' : '}</strong></Typography>
              <Typography mb={1} ml={1} sx={text5}>{journey[dtkey]}</Typography>
            </Box>;
          }
          )}
        </Grid>
      </Grid>
    </AppLayoutWrapper >
  );
}
