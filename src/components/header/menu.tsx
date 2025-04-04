'use client';
import * as React from 'react';

import CallIcon from '@mui/icons-material/Call';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { appRoutes } from '@/constants/app-router';

const menuList = [
  {
    name: 'home',
    label: 'ME',
    icon: <PersonIcon />,
    path: appRoutes.home
  },
  {
    name: 'ABOUT',
    label: 'ABOUT',
    icon: <DescriptionIcon />,
    path: appRoutes.about

  },
  {
    name: 'education',
    label: 'EDUCATION',
    icon: <SchoolIcon />,
    path: appRoutes.education

  },
  {
    name: 'experiance',
    label: 'EXPERIANCE',
    icon: <WorkIcon />,
    path: appRoutes.experiance

  },
  {
    name: 'contact',
    label: 'CONTACT',
    icon: <CallIcon />,
    path: appRoutes.contact
  }
];

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
