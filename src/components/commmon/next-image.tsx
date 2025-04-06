'use client';

import React, { useState } from 'react';

import { Box } from '@mui/material';
import Image from 'next/image';

import { Fallback } from '@/assets/icons';
import { nextImage } from '@/assets/styles';
import { CustomeImageType } from '@/types';

function CutomImage(props: CustomeImageType) {
  const { src, alt = 'Responsive Image', fallback = '', sx = {} } = props;

  const [imgSrc, setImgSrc] = useState(src || fallback || Fallback.src);

  const handleError = () => {
    setImgSrc(fallback || Fallback.src);
  };

  return (
    <Box sx={{ ...nextImage, ...sx }}>
      <Image
        className='custom-next-imgae'
        src={imgSrc}
        alt={alt}
        width={1200}
        height={800}
        layout="intrinsic"
        priority={false}
        onError={handleError}
      />
    </Box>
  );
}

export default CutomImage;
