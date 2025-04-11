'use client';

import { useRef } from 'react';

import { Box } from '@mui/material';
import { useAnimationFrame } from 'motion/react';
import key from 'weak-key';

import { bouncingBlock } from '@/assets/styles';
import { BouncingBlockType } from '@/types';

export default function BouncingBlock({ data }: { data: BouncingBlockType[] }) {
  const ref = useRef<HTMLDivElement>(null);
  useAnimationFrame((t) => {
    if (!ref.current) {
      return;
    }
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <Box className="container" sx={bouncingBlock}>
      <Box className="cube" ref={ref}>
        {
          data.map((d) => {
            const name = `side ${d.side}`;
            return (<Box key={key(d)} className={name}>
              {d.name}
            </Box>);
          })
        }
      </Box>
    </Box>
  );
}
