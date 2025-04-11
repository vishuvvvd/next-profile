import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { Grid, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material';
import { startCase } from 'lodash';
import { useTranslations } from 'next-intl';
import key from 'weak-key';

import { defaultRadius, sectionHeader, skillsList } from '@/assets/styles';
import { lightSubTitle } from '@/assets/styles/about';
import { KeyExperience } from '@/types/about';

export default function KeyExperaince({ keyExperience }: { keyExperience: KeyExperience }) {
  const t = useTranslations('ABOUTPAGE');
  return (
    <Grid spacing={2} container alignItems='stretch'>
      <Grid size={12}>
        <Typography mt={3} className='award-title' sx={sectionHeader}>{t('KEY_EXPERIENCE')}</Typography>
      </Grid>
      {Object.entries(keyExperience).map(([category, items]) =>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={key(items)}>
          < List
            sx={skillsList}
            subheader={<ListSubheader
              key={key(items) + category}
              sx={defaultRadius}>
              <Typography pt={1} sx={lightSubTitle}><strong>{startCase(category)}</strong></Typography>
            </ListSubheader>
            }>
            {items.map((item: { technology: string, description: string }) =>
              <ListItem key={key(item)}>
                <ListItemIcon>
                  <LabelImportantIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-wifi" primary={item.technology} />
              </ListItem>
            )}
          </List>
        </Grid>
      )}
    </Grid>
  );
}
