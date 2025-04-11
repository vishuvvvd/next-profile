/* eslint-disable @typescript-eslint/naming-convention */

import { text4, text5, text6, textPrimaryMain } from '.';
import { aliceBlue, white } from '../colors';

export const experienceStyle = {
  padding: 2,
  borderRadius: 2,
  mb: 2,
  backgroundColor: white,
  '.period': {
    ...text6,
    opacity: 0.5,
  },
  '.position': {
    ...text4,
    fontWeight: 500,
    opacity: 0.8,
  },
  '.projects': {
    mt: 3,
    '.project-container': {
      border: `1px solid ${aliceBlue}`,
      borderRadius: 1,
      boxShadow: 3,
      cursor: 'pointer',
      transition: 'all 0.3s ease-in-out',
      p: 1,
      '.project-title': {
        ...text5,
        ...textPrimaryMain,
      },
      '.project-description': {
        ...text5,
        fontSize:{ xs:'auto', md: '1rem' },
        opacity: 0.6,
      },
      ul: {
        pl: 3,
        li: {
          mb: 1,
          opacity: 1,
        },
      },
    },
  },
};

export const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 1, // Delay between list items
    },
  },
};
  
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};
  
