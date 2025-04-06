import { Box } from '@mui/material';

import { profile, profileContainer } from '@/assets/styles';

import ColoredBorderedBox from '../commmon/colored-borderd-box';
import CutomImage from '../commmon/next-image';

export default function Profile({ data }: { data: { imageUrl: string, bio: string, } }) {

  return (
    <Box sx={profile}>
      <CutomImage src={data?.imageUrl} alt='Profile Image' sx={profileContainer} />
      <ColoredBorderedBox note={data?.bio} />
    </Box>
  );
}

