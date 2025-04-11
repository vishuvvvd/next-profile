/* eslint-disable @typescript-eslint/naming-convention */
import { sectionHeader, text4, text5, text6 } from '.';
import { primaryMain } from '../colors';

export const aboutMeStyle = {
  '.intro': {
    ...text4,
    px:{ xs: 1, sm: 0 }
  },
  '.previousExperience': {
    mt: { xs: 1, md: 2 },
    ...text4,
    px:{ xs: 1, sm: 0 }
  },
  '.awards': {
    '.award-block': {
      border: `1px solid ${primaryMain}`,
      p: 1,
      borderRadius: 3,
    },
    '.award-title': {
      mt: { xs: 2, md: 3 },
      ...sectionHeader,
    },
    '.award': {
      ...text5,
    },
    '.company': {},
    '.description': {
      ...text6,
      opacity: 0.5,
    },
  },
};

export const awardIcon = { height: '60px', width: '60px' };

export const lightSubTitle = {
  text6, opacity: .5 
};

export const educationStyle = {
  mb: { xs: 2, sm: 3, md: 5 },
  '.education-title': {
    ...sectionHeader,
    mb: 2,
  },
};

export const stepperConnector = {
  width: '100%',
  '.MuiStepConnector-root': {
    height: { xs: '80px', md: '0' },
    mt: -1.5,
    mb: 0.5,
    '.MuiStepConnector-line': {
      height: '100%',
      width: '100%',
    },
    '.MuiStepIcon-text': {
      display: 'none',
    },
    svg: {
      color: 'red !important',
    },
  },
};
