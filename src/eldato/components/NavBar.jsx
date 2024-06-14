import Logo from '../../Logo'
import { AppBar, Box, Button, Grid, IconButton, Toolbar } from '@mui/material'

export const NavBar = () => {
  return (
    <AppBar
        position='fixed'
        sx={{bgcolor:'rgba(0,0,0,0.15)'}}
    >
      <Toolbar>
        <Grid 
          container direction='row'
          alignItems='center'>

          {/* IconButton */}
          <IconButton className='logo-navbar'>
            <Logo />
          </IconButton>

          {/* Links */}
          <Box>
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

        </Grid>
      </Toolbar>
    </AppBar>
  )
}
