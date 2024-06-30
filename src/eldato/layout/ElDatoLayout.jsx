import { Box } from '@mui/material'
// import { NavBar } from '../components'  // This can be commented out if you're not using NavBar

export const ElDatoLayout = ({children}) => {
  return (
    <Box sx={{ display:'flex'}} >
        {/* <NavBar /> */}
        <Box 
            component='main'
            sx={{ flexGrow:1 }}
        >
            {children}
        </Box>
    </Box>
  )
}
