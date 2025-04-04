
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Grid } from '@mui/material';
import { header } from '@/assets/styles';
import SiteLogo from './logo';
import MenuList from './menu';
import Profile from './profile';

function AppHeader() {
    return (
        <AppBar position="static" sx={header}>
            <Grid height={1} container alignItems={'center'}>
                <Grid>
                    <SiteLogo />
                </Grid>
                <Grid size="grow">
                    <MenuList />
                </Grid>
                <Grid >
                    <Profile />
                </Grid>
            </Grid>
        </AppBar>
    );
}
export default AppHeader;