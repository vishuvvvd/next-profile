'use client';
import * as React from 'react';

import SchoolIcon from '@mui/icons-material/School';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import key from 'weak-key';

import { stepperConnector } from '@/assets/styles/about';
import { Education } from '@/types/about';

export default function EducationStepper({ data }: { data: Education[] }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // sm and below for vertical orientation
  return (
    <Box sx={stepperConnector} >
      <Stepper orientation={isSmallScreen ? 'vertical' : 'horizontal'}>
        {data.map((d) => {
          return (
            <Step key={key(d)} >
              <StepLabel StepIconComponent={() => <SchoolIcon />}>{d.degree}</StepLabel>
              <Box ml={1.5} pl={2.5}>{d.institution}</Box>
            </Step>
          );
        })}
      </Stepper >
    </Box >
  );
}
