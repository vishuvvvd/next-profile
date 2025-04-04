import * as React from 'react';

import { Container } from '@mui/material';
import Box from '@mui/material/Box';

import { grey } from '@/assets/colors';
import { layoutWrapper } from '@/assets/styles';
import { SCREEN_MIN_HEIGHT } from '@/constants';
import { LayoutWrapper } from '@/types';

function AppLayoutWrapper({
  children,
  backgroundColor = grey
}: LayoutWrapper) {
  return (
    <Box sx={{
      backgroundColor,
      minHeight: SCREEN_MIN_HEIGHT
    }}>
      <Container sx={layoutWrapper}>
        {children}
      </Container>
    </Box>
  );
}
export default AppLayoutWrapper;
