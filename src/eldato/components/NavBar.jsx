import { useState } from 'react';
import { DrawerComp } from './DrawerComp';
import Logo from '../../Logo'
import { AppBar, Box, Button, Grid, IconButton, Tab, Tabs, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@emotion/react';

export const NavBar = () => {

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <AppBar
        position='fixed'
        sx={{backgroundColor:'rgba(0,0,0,0.15)'}}
    >
      <Toolbar>
        <Grid 
          container direction='row'
          alignItems='center'>

          {/* IconButton */}
          <IconButton 
            className='logo-navbar'
            sx={{flexGrow:1, display:{xs:'none', md:'flex'}}}>
            <Logo />
          </IconButton>

          {/* Condition to change to movile */}
          {isMatch ? (
            <>
              <IconButton 
                className='logo-navbar'
                sx={{color:'white'}}>
                <Logo />
              </IconButton>
              <DrawerComp />
            </>
          ) : (
            <>
              {/* Links */}
              <Box sx={{ display:{xs:'none', md:'flex'}}}>
                <Button
                  style={{padding:'0 1rem'}}
                  href="https://stathead.eldatomx.com"
                  >
                  stathead
                </Button>
                <Button style={{padding:'0 1rem'}} >
                  scout
                </Button>
              </Box>
            </>
          )}

        </Grid>
      </Toolbar>
    </AppBar>
  )
}
