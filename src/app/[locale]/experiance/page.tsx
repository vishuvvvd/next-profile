import { Box, Grid, Typography } from '@mui/material';
import { isEmpty } from 'lodash';
import * as motion from 'motion/react-client';
import key from 'weak-key';

import { experienceStyle, itemVariants, listVariants } from '@/assets/styles/experiance';
import AppLayoutWrapper from '@/components/layout-wrapper';
import { getServerLocaleRevalidate } from '@/helpers/server-utils';
import { getExperianceData } from '@/services/main/experiance';
import { Experience } from '@/types/experiance';

export default async function ExperiancePage() {
  const { locale, revalidate, hostUrl } = await getServerLocaleRevalidate();
  const data: Experience[] = await getExperianceData({ revalidate, locale, hostUrl });
  return (
    <AppLayoutWrapper>
      {
        data.map(exp =>
          <Box key={key(exp)} sx={experienceStyle}>
            <Typography className='company-name' variant='h5'>{exp.company}<span className='period'>{` (${exp.duration})`}</span></Typography>
            <Typography className='position'>{exp.position}</Typography>
            <Grid container className='projects' spacing={3}>
              {
                exp.projects.map(pro => <Grid className='project-container' size={{ xs: 12, sm: 6, md: 4 }} key={key(pro)}>
                  <Typography className='project-title'>{pro.name}</Typography>
                  <Typography className='project-description'>{pro.description}</Typography>
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={listVariants}
                  >
                    {
                      !isEmpty(pro.responsibilities) && pro.responsibilities?.map(resp =>
                        <motion.li
                          variants={itemVariants}
                          style={{ listStyleType: 'disc', marginBottom: '8px' }}
                          key={key({ resp })}>
                          <Typography color='text.secondary'> {resp}</Typography>
                        </motion.li>
                      )
                    }
                  </motion.ul>
                </Grid>)
              }
            </Grid>
          </Box>
        )}
    </AppLayoutWrapper>
  );
}
