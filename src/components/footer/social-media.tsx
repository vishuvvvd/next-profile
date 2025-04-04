import * as React from 'react';

import Box from '@mui/material/Box';

import { socialMediaList } from '@/constants/header-footer';

function SocialMedia() {
  return (
    <Box className='social-media-list'>
      {socialMediaList.map((data) => <a className='social-media-item' key={data.name} target='_blank' href={data.url} rel="noreferrer">{data.icon}</a>)}
    </Box>
  );
}
export default SocialMedia;
