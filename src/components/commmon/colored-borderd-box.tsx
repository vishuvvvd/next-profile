'use client';
import React, { useEffect } from 'react';

import { Box, Typography } from '@mui/material';
import { motion, useSpring, useTransform, useTime } from 'framer-motion';

import { coloredBorderedBox } from '@/assets/styles';
import { ColoredBorderBox } from '@/types';

function ColoredBorderedBox({ note, borderGradient, sx = {} }: ColoredBorderBox) {
  const pulse = useSpring(0, { damping: 0, mass: 5, stiffness: 10 });
  const pulseStringBg = useTransform(pulse, (r) => {
    return `blur(${r}px)`;
  });
  const time = useTime();
  const gradient = useTransform(time, (t) => {
    return borderGradient || `conic-gradient(
            #FF1493 ${t % 360}deg, 
            #32CD32 ${(t + 60) % 360}deg, 
            #FFD700 ${(t + 120) % 360}deg, 
            #FF4500 ${(t + 180) % 360}deg, 
            #FF6347 ${(t + 240) % 360}deg, 
            #8A2BE2 ${(t + 300) % 360}deg
        )`;
  });

  useEffect(() => {
    pulse.set(10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box className='colored-border-box' sx={{ ...coloredBorderedBox, ...sx }}>
      <motion.div
        className='motion-background-animation'
        style={{ background: gradient, filter: pulseStringBg }}
      />
      <Box className='bordered-box-body'>
        <Typography className='bordered-box-body-note'>
          {note}
        </Typography>
      </Box>
    </Box>
  );
}

export default ColoredBorderedBox;
