'use client';
import * as React from 'react';

import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { menuList } from '@/constants/header-footer';

function MenuList() {
  const router = useRouter();
  const t = useTranslations('HEADER');

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Box className='menu-list-conatiner'>
      <Grid container className='menu-list-grid'>
        {
          menuList.map((data) => <Grid
            key={data.name}
            className='menu-list-item'
            onClick={() => handleNavigation(data.path)}>
            {data.icon}
            <Typography className='menu-item-label'>{t(data.label)}</Typography>
          </Grid>)
        }

      </Grid>
    </Box>
  );
}
export default MenuList;
