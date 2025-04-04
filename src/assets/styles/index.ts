import { black, primaryMain, secondaryMain, white } from '../colors';

/* eslint-disable @typescript-eslint/naming-convention */
export const textCenter = {
  textAlign: 'center'
};

export const textPrimaryMain = {
  color: primaryMain
};

export const textSecondaryMain = {
  color: secondaryMain
};

export const textBlack ={
  color: black
};

export const textWhite ={
  color: white
};

export const text1 = {
  fontSize: { xs: '1.5rem', sm: '2.125rem' },
  lineHeight: { xs: '2rem', sm: '2.5rem' }
};

export const text2 = {
  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.875rem' },
  lineHeight: { xs: '1.75rem', sm: '2rem', md: '2.25rem' }
};

export const text3 = {
  fontSize: { xs: '1.20rem', sm: '1.25rem', md: '1.5rem' },
  lineHeight: { xs: '1.6rem', sm: '1.75rem', md: '2rem' }
};

export const text4 = {
  fontSize: { xs: '1.15rem', sm: '1.20rem', md: '1.25rem' },
  lineHeight: { xs: '1.5rem', sm: '1.6rem', md: '1.75rem' }
};

export const text5 = {
  fontSize: { xs: '1rem', sm: '1.10rem', md: '1.125rem' },
  lineHeight: { xs: '1.5rem', sm: '1.6rem', md: '1.65rem' }
};

export const text6 = {
  fontSize: { xs: '.688rem', sm: '.875rem', md: '1rem' },
  lineHeight: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
};

export const header = {
  height: { xs: '70px', md: '50px' },
  py: 0.2,
  px: 2,
  position: { xs: 'fixed', md: 'sticky' },
  bottom: { xs: 0, md: 'unset' },
  top: { xs: 'unset', md: 0 },
  left: { xs: 0 },
  right: { xs: 0 },
  '.app-logo': {
    pt: 0.2,
    display: { xs: 'none', sm: 'block' },
  },
  '.menu-list-conatiner': {
    display: 'flex',
    justifyContent: 'center',
    '.menu-list-grid': {
      gap: { xs: 3, sm: 6, md: 6 },
      '.menu-list-item': {
        cursor: 'pointer',
        justifyItems: { xs: 'center', md: 'baseline' },
        display: { xs: 'block', md: 'flex' },
        '.menu-item-label': {
          ...text6,
          mt: { xs: 0, md: 0.4 },
          ml: { xs: 0, md: 0.5 },
          lineHeight: { xs: '1.03rem', md: '1.25rem' },
        },
      },
    },
  },
  '.user-profile': {
    //TODO:: will be used once i start with user management
    display: { xs: 'none', sm: 'none' },
  },
};

export const footer = {
  py:{ xs:3, sm:4, md:5 },
  mb:{ xs:9, sm:8, md: 0 },
  '.footer-message-one':{
    ...textCenter,
    ...text3,
    ...textPrimaryMain,
    '.code-strong-text':{
      ...textBlack
    },
    '.heart-symbol':{
      ...textSecondaryMain
    }
  },
  '.footer-message-two':{
    ...textCenter,
    ...text3,
    pt:2
  },
  '.social-media-list':{
    pt:2,
    justifySelf:'center',
    textAlign:'center',
    '.social-media-item':{
      pt:2,
      px:1,
      cursor:'pointer',
      ...textBlack,
      svg:{
        ...text1
      }
    }
  }
};

export const layoutWrapper = {
  gap:{ xs:1 },
  px:{ xs:1, sm:2, md:3 },
  py:{ xs:2, lg:2 },
  maxWidth: { lg:'80%' },
  height:'100%'
};
