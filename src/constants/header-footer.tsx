import CallIcon from '@mui/icons-material/Call';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import WorkIcon from '@mui/icons-material/Work';

import { appRoutes } from '@/constants/app-router';

import { CONTACT_EMAIL, CONTACT_NUMBER } from '.';

export const socialMediaList = [
  {
    name: 'github',
    icon: <GitHubIcon />,
    url: 'https://github.com'
  },
  {
    name: 'gmail',
    icon: <EmailIcon />,
    url: `mailto:${CONTACT_EMAIL}`
  },
  {
    name: 'facebook',
    icon: <FacebookIcon />,
    url: 'https://www.facebook.com'
  },
  {
    name: 'instagram',
    icon: <InstagramIcon />,
    url: 'https://www.instagram.com'
  },
  {
    name: 'whatsapp',
    icon: <WhatsAppIcon />,
    url: `https://api.whatsapp.com/send?phone=91${CONTACT_NUMBER}&text=Hi&lang=en`
  },
  {
    name: 'linkedin',
    icon: <LinkedInIcon />,
    url: 'https://www.linkedin.com'
  },
  {
    name: 'twitter',
    icon: <TwitterIcon />,
    url: 'https://twitter.com'
  },
];

export const menuList = [
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
