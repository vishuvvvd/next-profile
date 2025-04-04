
"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import { AppLogo } from '@/assets/icons';
import Image from 'next/image';

function SiteLogo() {
    return (
        <Box className='app-logo'>
            <Image src={AppLogo.src} alt="Favicon" width={40} height={40} />
        </Box>
    );
}
export default SiteLogo;