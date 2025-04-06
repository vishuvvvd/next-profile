import { black, grey, primaryMain, secondaryMain, white } from '../colors';
/* eslint-disable import/no-unused-modules */
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
  zIndex:10,
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
        ...textCenter,
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

export const footerBouncingBlock = {
  display: { xs: 'none', md: 'block' },
  px:{ sm: 6, md: 6, lg:0 }
};

export const coloredBorderedBox = {
  ...textCenter,
  position: 'relative',
  width:  '100%',
  maxWidth:  '800px',
  height: { xs:'240px', sm:'200px' },
  marginTop: '24px',
  '.motion-background-animation':{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '15px',
    border: '4px solid transparent',
  },
  '.bordered-box-body':{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding:2,
    backgroundColor: grey,
    borderRadius: '15px',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...textWhite
  },
  '.bordered-box-body-note':{
    ...text5,
    ...textBlack,
    textAlign:'justify'
  }
};

export const bouncingBlock = {
  perspective: '400px',
  width: '100px',
  height: '100px',
  '.cube':{
    width: '100px',
    height: '100px',
    position: 'relative',
    transformStyle: 'preserve-3d'
  },
  '.side': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  '.front': {
    transform: 'rotateY(0deg) translateZ(50px)',
    background: 'linear-gradient(45deg, #FF6347, #FF4500, #FFD700)', // Tomato to OrangeRed to Gold
    color: 'white',
  },
  '.right': {
    transform: 'rotateY(90deg) translateZ(50px)',
    background: 'linear-gradient(45deg, #8A2BE2, #4B0082, #8B008B)', // BlueViolet to Indigo to DarkMagenta
    color: 'white',
  },
  '.back': {
    transform: 'rotateY(180deg) translateZ(50px)',
    background: 'linear-gradient(45deg, #FFD700, #FF1493, #FF6347)', // Gold to DeepPink to Tomato
    color: 'white',
  },
  '.left': {
    transform: 'rotateY(-90deg) translateZ(50px)',
    background: 'linear-gradient(45deg, #00BFFF, #1E90FF, #4169E1)', // DeepSkyBlue to DodgerBlue to RoyalBlue
    color: 'white',
  },
  '.top': {
    transform: 'rotateX(90deg) translateZ(50px)',
    background: 'linear-gradient(45deg, #32CD32, #228B22, #006400)', // LimeGreen to ForestGreen to DarkGreen
    color: 'white',
  },
  '.bottom': {
    transform: 'rotateX(-90deg) translateZ(50px)',
    background: 'linear-gradient(45deg, #F0E68C, #FFD700, #FF8C00)', // Khaki to Gold to DarkOrange
    color: 'white',
  },
};

export const profileContainer = { 
  width:'100%',
  maxWidth: '300px', 
  maxHeight: '300px', 
  overflow: 'hidden', 
  borderRadius: '50%' };

export const nextImage = { width: '300px', height: '300px' };

export const profile = { justifyItems: 'center', textAlign: '-webkit-center' };
