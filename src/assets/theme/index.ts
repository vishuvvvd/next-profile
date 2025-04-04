'use client';
import { createTheme } from '@mui/material/styles';

import { primaryMain, secondaryMain } from '../colors';

const theme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2rem',
    },
  },
});

export default theme;
