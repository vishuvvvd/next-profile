import { Box } from '@mui/material';
import Image from 'next/image';

import { profile, profileContainer } from '@/assets/styles';

import ColoredBorderedBox from '../commmon/colored-borderd-box';
import { Fallback } from '@/assets/icons';

export default function Profile({ data }: { data: { imageUrl: string, bio: string, } }) {

  return (
    <Box sx={profile}>
      <div style={profileContainer}>
        <Image
          src={data.imageUrl || Fallback.src}
          alt="Responsive Example"
          width={300}
          height={300}
          layout="intrinsic"
          priority={false}
        />
      </div>
      <ColoredBorderedBox note={data.bio} />
    </Box>
  );
}

