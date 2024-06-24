import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom';

export const DrawerComp = () => {

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <List sx={{width:'150px'}}>
                {/* SCOUT DRAWER LINK */}
                <ListItemButton onClick={() =>setOpenDrawer(false)} component={Link} to="https://stathead.eldatomx.com">
                  <ListItemIcon >
                    <ListItemText>STATHEAD</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
                {/* SCOUT DRAWER LINK */}
                <ListItemButton onClick={() =>setOpenDrawer(false)} component={Link} to="">
                  <ListItemIcon >
                    <ListItemText>SCOUT</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
          </List>
        </Drawer>
        <IconButton sx={{ color:'white', marginLeft:'auto' }} onClick={()=>setOpenDrawer(!openDrawer)}>
          <MenuIcon />
        </IconButton>
    </>
  )
}
